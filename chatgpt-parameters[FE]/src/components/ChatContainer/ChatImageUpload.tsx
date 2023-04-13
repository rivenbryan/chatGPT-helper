import { useState } from 'react';
import { FileButton, Button, Group, Text } from '@mantine/core';
import axios from 'axios';

export default function ChatImageUpload() {
    const [file, setFile] = useState<File | null>(null);

    const handleUpload = async () => {
      if (!file) return;
  
      const formData = new FormData();
      formData.append('image', file);
  
      try {
        const response = await axios.post('http://localhost:5000/api/upload', formData);
  
        console.log(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    return (
      <>
        <Group position="center">
        <FileButton
          onChange={(file) => setFile(file)}
          accept="image/png,image/jpeg"
        >
          {(props) => <Button {...props}>Select image</Button>}
        </FileButton>
        <Button onClick={handleUpload} disabled={!file}>
          Upload image
        </Button>
        </Group>
  
        {file && (
          <Text size="sm" align="center" mt="sm">
            Picked file: {file.name}
          </Text>
        )}
      </>
    );
}