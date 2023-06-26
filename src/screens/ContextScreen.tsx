import React, {
  Dispatch,
  Fragment,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';

import { ReactComponent as Loading } from '@assets/svgs/loading.svg';
import { ReactComponent as Send } from '@assets/svgs/send.svg';
import { Status } from '@common/types';
import { Background, Box, Button, Input, Text } from '@components';
import { useTheme } from '@mui/material';
import { clearContext, fetchContext, sendPrompt } from '@services/gpt';
import { white } from '@themes/default/colors';

export const ContextScreen: React.FC = () => {
  const theme = useTheme();
  const [prompt, setPrompt] = useState('');
  const [status, setStatus] = useState<IMedicalChatStatus>({
    clearContext: 'idle',
    fetchContext: 'idle',
    sendPrompt: 'idle',
  });
  const [context, setContext] = useState<ContextType>([]);

  const lastMessage = context[context.length - 1];

  const isButtonDisabled =
    status.sendPrompt === 'pending' ||
    status.fetchContext === 'pending' ||
    prompt.length <= 1;

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isButtonDisabled) {
      handleSendPrompt(prompt);
    }
  };

  const handleFetchContext = () => {
    updateStatus('fetchContext', 'pending', setStatus);

    fetchContext()
      .then((res) => {
        updateStatus('fetchContext', 'succeeded', setStatus);
        setContext(res.data.context);
      })
      .catch(() => updateStatus('fetchContext', 'failed', setStatus));
  };

  const handleSendPrompt = (_prompt: string) => {
    updateStatus('sendPrompt', 'pending', setStatus);

    sendPrompt(_prompt)
      .then(() => {
        updateStatus('sendPrompt', 'succeeded', setStatus);
        setPrompt('');
        handleFetchContext();
      })
      .catch(() => updateStatus('sendPrompt', 'failed', setStatus));
  };

  const handleClearContext = () => {
    setStatus({ clearContext: 'pending' });

    clearContext()
      .then(() => {
        setStatus({ clearContext: 'succeeded' });
        handleFetchContext();
      })
      .catch(() => setStatus({ clearContext: 'failed' }));
  };

  useEffect(() => {
    handleFetchContext();
  }, []);

  console.log(status);

  return (
    <Background>
      <Box>
        <Context context={context} />
        <Box mt="12px">
          <Fragment>
            {status.fetchContext === 'pending' ? (
              <Text align="right">Pensando...</Text>
            ) : (
              <Text align="right">&nbsp;</Text>
            )}
          </Fragment>
        </Box>
        <Fragment>
          {lastMessage?.content.includes('botão abaixo') ? (
            <Box flexDirection="row" gap="12px">
              <Button variant="outlined" text="Começar tratamento" />
              <Button
                variant="outlined"
                loading={status.sendPrompt === 'pending'}
                disabled={
                  status.sendPrompt === 'pending' ||
                  status.fetchContext === 'pending'
                }
                text="Continuar consulta médica"
                onClick={() => handleSendPrompt('Continuar consulta médica.')}
              />
            </Box>
          ) : (
            <Box>
              <Box flexDirection="row">
                <PromptSuggestion
                  status={status}
                  suggestion="Sim"
                  handleSendPrompt={handleSendPrompt}
                />
                <PromptSuggestion
                  status={status}
                  suggestion="Não"
                  handleSendPrompt={handleSendPrompt}
                />
                <PromptSuggestion
                  status={status}
                  suggestion="Não sei"
                  handleSendPrompt={handleSendPrompt}
                />
              </Box>
              <Box gap="12px" flexDirection="row">
                <Input
                  onKeyPress={(e) => handleKeyPress(e)}
                  label="Mensagem"
                  autoFocus
                  fullWidth
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
                <Box
                  backgroundColor={theme.palette.primary.main}
                  minWidth="56px"
                  minHeight="56px"
                  borderRadius="28px"
                  onClick={
                    isButtonDisabled
                      ? () => null
                      : () => handleSendPrompt(prompt)
                  }
                  style={{
                    cursor: isButtonDisabled ? 'not-allowed' : 'pointer',
                    transition: '0.3s',
                    filter: isButtonDisabled ? 'opacity(0.5)' : 'opacity(1)',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {status.sendPrompt ? (
                    <Loading height="38px" width="38px" color={white} />
                  ) : (
                    <Send height="38px" width="38px" color={white} />
                  )}
                </Box>
              </Box>
              <Button
                variant="text"
                text="Limpar contexto"
                loading={status.clearContext === 'pending'}
                disabled={
                  status.clearContext === 'pending' ||
                  status.fetchContext === 'pending'
                }
                onClick={handleClearContext}
              />
            </Box>
          )}
        </Fragment>
      </Box>
    </Background>
  );
};

const updateStatus = (
  key: 'fetchContext' | 'clearContext' | 'sendPrompt',
  status: Status,
  setStatus: Dispatch<SetStateAction<IMedicalChatStatus>>
) => {
  return setStatus((prevState) => ({
    ...prevState,
    [key]: status,
  }));
};

const PromptSuggestion: React.FC<{
  suggestion: string;
  status: IMedicalChatStatus;
  handleSendPrompt: (suggestion: string) => void;
}> = ({ suggestion, status, handleSendPrompt }) => {
  const theme = useTheme();

  return (
    <Box
      onClick={() => {
        selectedSuggestion = suggestion;
        handleSendPrompt(suggestion);
      }}
    >
      {status.sendPrompt === 'succeeded' &&
      selectedSuggestion === suggestion ? (
        <Loading
          height="14px"
          width="14px"
          color={theme.palette.secondary.main}
        />
      ) : (
        <Text
          color={theme.palette.secondary.main}
          fontWeight="700"
          fontFamily="Merriweather Sans"
          fontSize="14px"
        >
          {suggestion}
        </Text>
      )}
    </Box>
  );
};

const Context: React.FC<{ context: ContextType }> = ({ context }) => {
  const theme = useTheme();
  const boxRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (boxRef.current) boxRef.current.scrollTop = boxRef.current.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, [context]);

  return (
    <Box
      pr="8px"
      ref={boxRef}
      gap="8px"
      height="70vh"
      style={{ overflowX: 'auto' }}
    >
      <Fragment>
        {context.map((message, index) => (
          <Box
            borderRadius="8px"
            p="12px"
            key={index}
            backgroundColor={
              message.role === 'user'
                ? theme.palette.primary[700]
                : theme.palette.primary.main
            }
          >
            <Text
              align={message.role === 'user' ? 'left' : 'right'}
              color={white}
              fontFamily="Merriweather Sans"
            >
              {message.content}
            </Text>
          </Box>
        ))}
      </Fragment>
    </Box>
  );
};

type ContextType = {
  role: 'user' | 'system';
  content: string;
}[];

let selectedSuggestion: string;

interface IMedicalChatStatus {
  clearContext?: Status;
  fetchContext?: Status;
  sendPrompt?: Status;
}
