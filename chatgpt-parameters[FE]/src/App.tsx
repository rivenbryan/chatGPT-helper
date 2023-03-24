import { TextInput, Checkbox, Button, Group, Box, MantineProvider, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import axios from 'axios';
import { useState } from 'react';

export default function App() {
  const [message, setMessage] = useState("")

  const form = useForm({
    initialValues: {
      content: '',
    }
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log("Clicked!")
    const content = form.values;
    axios.post('http://localhost:5000/api/request', content)
      .then(response => {
        console.log(response)
      })
      .catch(error => console.error(error));
  }

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Text>Welcome to ChatGPT</Text>
      <Box maw={300} mx="auto">
        <form onSubmit={handleSubmit}>
          <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps('content')}
          />
            {message}
          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>
    </MantineProvider>
  )
}