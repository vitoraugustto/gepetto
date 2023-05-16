import React, { Fragment, useEffect, useRef, useState } from 'react';

import { Status } from '@common/types';
import { Background, Box, Button, Input, Text } from '@components';
import { clearContext, fetchContext, sendPrompt } from '@services/gpt';
import { black } from '@themes/default/colors';

export const ContextScreen: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [status, setStatus] = useState<{
    clearContext?: Status;
    fetchContext?: Status;
    sendPrompt?: Status;
  }>({ clearContext: 'idle', fetchContext: 'idle', sendPrompt: 'idle' });
  const [context, setContext] = useState<ContextType>([]);

  const lastMessage = context[context.length - 1];

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendPrompt(prompt);
    }
  };

  const handleFetchContext = () => {
    setStatus({ fetchContext: 'pending' });

    fetchContext()
      .then((res) => {
        setStatus({ fetchContext: 'succeeded' });
        setContext(res.data.context);
      })
      .catch(() => setStatus({ fetchContext: 'failed' }));
  };

  const handleSendPrompt = (_prompt: string) => {
    setStatus({ sendPrompt: 'pending' });

    sendPrompt(_prompt)
      .then(() => {
        setStatus({ sendPrompt: 'succeeded' });
        setPrompt('');
        handleFetchContext();
      })
      .catch(() => setStatus({ sendPrompt: 'failed' }));
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
              <Button variant="outlined" text="Falar com um médico agora" />
              <Button
                variant="outlined"
                loading={status.sendPrompt === 'pending'}
                disabled={
                  status.sendPrompt === 'pending' ||
                  status.fetchContext === 'pending'
                }
                text="Continuar conversa com Karmen IA"
                onClick={() =>
                  handleSendPrompt('Continuar conversa com Karmen IA')
                }
              />
            </Box>
          ) : (
            <Box gap="12px">
              <Input
                onKeyPress={(e) => handleKeyPress(e)}
                label="Mensagem"
                autoFocus
                fullWidth
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <Button
                loading={status.sendPrompt === 'pending'}
                disabled={
                  status.sendPrompt === 'pending' ||
                  status.fetchContext === 'pending' ||
                  prompt.length <= 1
                }
                text="Enviar"
                onClick={() => handleSendPrompt(prompt)}
              />
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

const Context: React.FC<{ context: ContextType }> = ({ context }) => {
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
            backgroundColor={message.role === 'user' ? '#dbdbdb' : '#61b2ff'}
          >
            <Text
              align={message.role === 'user' ? 'left' : 'right'}
              color={black.main}
              fontWeight="600"
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
