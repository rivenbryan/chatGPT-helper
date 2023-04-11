import React from 'react';
import { Text, Box, Group, Stack, Code } from '@mantine/core';
import ReactMarkdown from 'react-markdown';
type ChatMessageProps = {
    chatMessage: string,
    index: number,
    style: React.CSSProperties,
    logo: JSX.Element,
};

export default function ChatMessage({ chatMessage, style, index, logo }: ChatMessageProps) {

    return (
        <Box key={index} style={style}>
            <Group>
                {logo}
                <Stack >
                    <ReactMarkdown>{chatMessage}</ReactMarkdown>
                </Stack>
            </Group>
        </Box>
    );
}