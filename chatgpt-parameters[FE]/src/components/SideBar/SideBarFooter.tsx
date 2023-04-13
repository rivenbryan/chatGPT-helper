import React from 'react';
import {UnstyledButton, Group, Text } from '@mantine/core';
import {AiFillDelete,AiFillInfoCircle } from "react-icons/ai";
import {FaRegMoon} from "react-icons/fa";

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
}

function SideFooterContent({ icon, label }: MainLinkProps) {
  return (
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
      <Group>
          {icon}
        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

const data = [
  { icon: <FaRegMoon/>, color: 'teal', label: 'ChatGPT - Text' },
  { icon: <FaRegMoon/>, color: 'teal', label: 'ChatGpt - Image' },
  { icon: <AiFillDelete />, color: 'blue', label: 'Clear Conversations' },
  { icon: <FaRegMoon/>, color: 'teal', label: 'Light mode' },
  { icon: <AiFillInfoCircle />, color: 'violet', label: 'About' },
];

export default function SideBarFooter() {
  const links = data.map((link) => <SideFooterContent {...link} key={link.label} />);
  return <div>{links}</div>;
}