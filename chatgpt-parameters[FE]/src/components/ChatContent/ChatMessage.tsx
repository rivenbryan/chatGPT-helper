import React from 'react'
import { Text, Box, Center } from '@mantine/core';

type ChatMessageProps = {
    allChatMessage: string[]
}

export default function ChatMessage({ allChatMessage }: ChatMessageProps) {
    return (
        <>

            {allChatMessage.map((chatMessage, index) => (
                <>
                    <Box style={{border: "1px solid black", minHeight: "100px", padding: "20px"}}>
                        
                            <Text key={index}>{chatMessage}</Text>
                    </Box>
                </>
            ))}

        </>
    )
}