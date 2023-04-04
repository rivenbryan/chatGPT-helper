import React from 'react'
import { Text, Box } from '@mantine/core';

type ChatMessageProps = {
    allChatMessage: string[]
}

export default function ChatMessage({ allChatMessage }: ChatMessageProps) {

    return (
        <>
            {allChatMessage.map((chatMessage, index) => {
                let style: React.CSSProperties = {
                    minHeight: "100px", padding: "20px"
                }
                if (index % 2 == 0) {
                    style = { background: "#FFFFFF", minHeight: "100px", padding: "20px" }
                }
                return (
                    <Box key={index} style={style}>
                        <Text >{chatMessage}</Text>
                    </Box>
                )

            })}

        </>
    )
}