import { useState, useContext } from 'react';
import { FileButton, Button, Group, Text } from '@mantine/core';
import { AiOutlineFileImage } from "react-icons/ai";

import axios from 'axios';
import { ChatMessageContext } from '../../contexts/ChatMessageContext';
export default function ChatImageUploadButton() {
  const {setAllUserMessage, setIsLoading, isLoading } = useContext(ChatMessageContext);
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = async (file: File) => {
    console.log("handleUpload button clicked!")
    if (!file) return;
    setIsLoading(true)
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
        <FileButton 
          onChange={handleSelectAndUpload}
          accept="image/png,image/jpeg"
        >
         
          {(props) =>  <AiOutlineFileImage size="1.5rem" {...props} />}
        </FileButton>
    </>
  );
}