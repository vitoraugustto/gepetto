import { Fragment, useEffect, useState } from 'react';

import { Status } from '@common/types';
import { Background, Box, Button, Input, Text } from '@components';
import { fetchContext, sendPrompt } from '@services/gpt';
import { black } from '@themes/default/colors';

export const ContextScreen: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [context, setContext] = useState<ContextType>([]);

  const handleFetchContext = () => {
    fetchContext().then((res) => setContext(res.data.context));
  };

  const handleSendPrompt = () => {
    setStatus('pending');

    sendPrompt(prompt).then(() => {
      setStatus('succeeded');
      setPrompt('');
      handleFetchContext();
    });
  };

  useEffect(() => {
    handleFetchContext();
  }, []);

  return (
    <Background>
      <Box>
        <Box gap="12px">
          <Context context={context} />
          <Input
            label="Envie sua mensagem"
            fullWidth
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <Button
            backgroundColor="#0000ff"
            loading={status === 'pending'}
            disabled={status === 'pending'}
            text="Enviar"
            onClick={handleSendPrompt}
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
