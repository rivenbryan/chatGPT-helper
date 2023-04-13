import { useState, useContext } from 'react';
import { FileButton, Button, Group, Text } from '@mantine/core';
import axios from 'axios';
import { ChatMessageContext } from '../../contexts/ChatMessageContext';
export default function ChatImageUpload() {
  const {setAllUserMessage, setIsLoading } = useContext(ChatMessageContext);
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = async (file: File) => {
    console.log("handleUpload button clicked!")
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('http://localhost:5000/api/upload', formData);
      console.log(response.data)
      setAllUserMessage((prevArrayUserMessages: any) => {
        const newArrayOfUserMessages: string[] = [...prevArrayUserMessages];
        newArrayOfUserMessages.push(response.data);
        console.log(newArrayOfUserMessages);
        return newArrayOfUserMessages;
      });
      setIsLoading(true)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSelectAndUpload = (file: File) => {
    setFile(file);
    handleUpload(file);
  };
  return (
    <>
      <Group position="center">
        <FileButton
          onChange={handleSelectAndUpload}
          accept="image/png,image/jpeg"
        >
          {(props) => <Button {...props}>Select image</Button>}
        </FileButton>
      </Group>

    </>
  );
}