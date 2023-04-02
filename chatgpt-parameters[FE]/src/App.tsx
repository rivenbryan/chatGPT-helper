import { MantineProvider, Grid } from '@mantine/core';
import SideBar from "./components/SideBar/SideBar"
import ChatContent from './components/ChatContent/ChatContent';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Grid gutter={0} grow>
        <Grid.Col span={1}><SideBar /></Grid.Col>
        <Grid.Col span={8}> <ChatContent /></Grid.Col>
      </Grid>
    </MantineProvider>
  )
}