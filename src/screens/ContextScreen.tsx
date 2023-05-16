import { Fragment, useEffect, useRef, useState } from 'react';

import { Status } from '@common/types';
import { Background, Box, Button, Input, Text } from '@components';
import { clearContext, fetchContext, sendPrompt } from '@services/gpt';
import { black } from '@themes/default/colors';

export const ContextScreen: React.FC = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  const [prompt, setPrompt] = useState('');
  const [status, setStatus] = useState<{
    clearContext?: Status;
    fetchContext?: Status;
    sendPrompt?: Status;
  }>({ clearContext: 'idle', fetchContext: 'idle', sendPrompt: 'idle' });
  const [context, setContext] = useState<ContextType>([]);

  const scrollToBottom = () => {
    boxRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
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

  const handleSendPrompt = () => {
    setStatus({ sendPrompt: 'pending' });

    sendPrompt(prompt)
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

  useEffect(() => {
    scrollToBottom();
  }, [context]);

  return (
    <Background>
      <Box ref={boxRef}>
        <Box gap="12px">
          <Context context={context} />
          <Input
            label="Envie sua mensagem"
            fullWidth
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <Button
            loading={status.sendPrompt === 'pending'}
            disabled={status.sendPrompt === 'pending'}
            text="Enviar"
            onClick={handleSendPrompt}
          />
          <Button
            variant="outlined"
            text="Limpar contexto"
            loading={status.clearContext === 'pending'}
            disabled={status.clearContext === 'pending'}
            onClick={handleClearContext}
          />
        </Box>
      </Box>
    </Background>
  );
};

const Context: React.FC<{ context: ContextType }> = ({ context }) => {
  return (
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
  );
};

type ContextType = {
  role: 'user' | 'system';
  content: string;
}[];
