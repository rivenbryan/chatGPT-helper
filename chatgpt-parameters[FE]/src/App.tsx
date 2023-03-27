import { TextInput, Checkbox, Button, Group, Box, MantineProvider, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import axios from 'axios';
import { resolve } from 'path';
import { useState, useEffect, useRef } from 'react';

interface ChatMessage {
  data: string,
}

export default function App() {
  const [allChatMessage, setAllChatMessage] = useState<string[]>([]);
  const [allUserMessage, setAllUserMessage] = useState<string[]>([]);
  const isMountedRef = useRef(false);

  /*
  * useEffect is called everytime we have a new Message
  * Make a request to the server
  */

  useEffect(() => {

    // This code will run only after the component has mounted
    if (isMountedRef.current) {
      console.log("UseEffect called! ")
      axios.post('http://localhost:5000/api/request', allUserMessage)
        .then(response => {
          console.log(allUserMessage)
          const newMessage = response as ChatMessage
          setAllChatMessage((previousArrayChatMessages) => {
            
            const newArrayOfChatMessages: string[] = [...previousArrayChatMessages]
            console.log(newArrayOfChatMessages)
            /* We want to add in two content to our chatMessage
            *  1. The chat message that user type
            *  2. The chat message that Chat GPT response
            */
            newArrayOfChatMessages.push(allUserMessage[allUserMessage.length-1])
            newArrayOfChatMessages.push(newMessage.data)
            console.log(newArrayOfChatMessages)
            return newArrayOfChatMessages;
          })
        })
        .catch(error => console.error(error));
    } else {
      /*
      * When useEffect is run for the first time, it sets isMountedRef to True
      */
      isMountedRef.current = true;
    }

  }, [allUserMessage]);


  const form = useForm({
    initialValues: {
      value: '',
    }
  });


  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log("Clicked!")

    const requestParameter = form.values;
    console.log(requestParameter)

    setAllUserMessage((prevArrayUserMessages) => {
      const newArrayOfUserMessages: string[] = [...prevArrayUserMessages];
      newArrayOfUserMessages.push(requestParameter.value);
      console.log(newArrayOfUserMessages);
      return newArrayOfUserMessages;
    });


  }

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Text>Welcome to ChatGPT</Text>
      <Box maw={300} mx="auto">
        <form onSubmit={handleSubmit}>
          <TextInput
            {...form.getInputProps('value')}
          />
          <Group position="right" mt="md">
            <Button type="submit">Send</Button>
          </Group>
        </form>
        {allChatMessage.map((chatMessage) => (
          <>
            <Text>{chatMessage}</Text>
            <br />
          </>
        ))}
      </Box>
    </MantineProvider>
  )
}