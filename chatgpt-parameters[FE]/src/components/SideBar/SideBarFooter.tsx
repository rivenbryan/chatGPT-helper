import React from 'react';
import { UnstyledButton, Modal, Group, Text, Button } from '@mantine/core';
import { AiFillDelete, AiFillInfoCircle } from "react-icons/ai";
import Model from './Model';
import { useDisclosure } from '@mantine/hooks';
export default function SideBarFooter() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
    <Model opened={opened} close={close}/>
      <UnstyledButton
        sx={(theme) => ({
          display: 'block',
          width: '100%',
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          },
        })}
      >
        <Group onClick={open}>
          <AiFillInfoCircle />
          <Text size="sm">About</Text>
        </Group>
      </UnstyledButton>

    </>
  )
      }
