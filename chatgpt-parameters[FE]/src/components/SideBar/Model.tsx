import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Text, Button } from '@mantine/core';

type ModelProps = {
    opened: boolean,
    close: () => void
}
export default function Model({opened, close}: ModelProps) {

  return (

    <Modal opened={opened} onClose={close} title="About StudentGPT" centered>
    <Text lineClamp={5}>A simple ChatGPT website made with ChatGPT & OCR API.</Text>
    <br/>
    <Text>Developed by Bryan </Text>
    <br/>
    <Text  fz="xs" color="grey">Source Code: <a href="https://github.com/rivenbryan/chatGPT-helper">Click here!</a></Text>
  </Modal>

  );
}

