import React from 'react'
import { Text, Box, Group } from '@mantine/core';
type ChatMessageProps = {
    chatMessage: string,
    index: number,
    style: React.CSSProperties
    logo:  JSX.Element,
}

export default function ChatMessage({chatMessage,style,index, logo}: ChatMessageProps) {
    return (
        <Box key={index} style={style}>
            <Group>
                {logo}
                <Text >{chatMessage}</Text>
            </Group>
        </Box>
    )
}