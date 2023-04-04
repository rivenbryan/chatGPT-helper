import { MantineProvider, Grid } from '@mantine/core';
import SideBar from "./components/SideBar/SideBar"
import ChatContainer from './components/ChatContainer/ChatContainer';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Grid gutter={0} grow>
        <Grid.Col span={1}><SideBar /></Grid.Col>
        <Grid.Col span={8}> <ChatContainer /></Grid.Col>
      </Grid>
    </MantineProvider>
  )
}