import { MantineProvider, Grid } from '@mantine/core';
import SideBar from "./components/SideBar/SideBar"
import ChatContainer from './components/ChatContainer/ChatContainer';
import { useState } from 'react';
import { ChatMessageContext } from './contexts/ChatMessageContext';
export default function App() {
  /* allChatMessage contains ALL chat message between User and ChatGPT */
  const [allChatMessage, setAllChatMessage] = useState<string[]>([]);

  /* allUserMessage contains ALL chat message from User */
  const [allUserMessage, setAllUserMessage] = useState<string[]>([]);

  /* isLoading is to check if message is sent/received from backend */
  const [isLoading, setIsLoading] = useState<boolean>(false)
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <ChatMessageContext.Provider
        value={{ allChatMessage, setAllChatMessage, allUserMessage, setAllUserMessage, isLoading, setIsLoading }}
      >
        <Grid gutter={0} grow>
          <Grid.Col span={1}><SideBar /></Grid.Col>
          <Grid.Col span={8}> <ChatContainer /></Grid.Col>
        </Grid>
      </ChatMessageContext.Provider>
    </MantineProvider>
  )
}