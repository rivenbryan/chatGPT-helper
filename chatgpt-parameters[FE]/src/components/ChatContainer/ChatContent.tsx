import React from 'react'

import { BsRobot } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import ChatMessage from './ChatMessage';
type ChatMessageProps = {
    allChatMessage: string[]
}

export default function ChatContent({ allChatMessage }: ChatMessageProps) {

    return (
        <>
            {allChatMessage.map((chatMessage, index) => {
                let style: React.CSSProperties = {
                    minHeight: "100px", padding: "20px"
                }
                /* Render User Messages */
                if (index % 2 == 0) {
                    style = {...style, background: "#FFFFFF"}
                    return <ChatMessage style={style} index={index} chatMessage={chatMessage} logo={<BiUserCircle />}/>
                } else {
                /* Render Bot Messages */
                return <ChatMessage style={style} index={index} chatMessage={chatMessage} logo={<BsRobot />}/>
                }
            
            })}

        </>
    )
}

// {allChatMessage.map((chatMessage, index) => {
//     let style: React.CSSProperties = {
//         minHeight: "100px", padding: "20px"
//     }
//     if (index % 2 == 0) {
//         style = { background: "#FFFFFF", minHeight: "100px", padding: "20px" }
//     }
//     return (
//         <Box key={index} style={style}>
//             <Group>
//                 <BsRobot/>
//                 <Text >{chatMessage}</Text>
//             </Group>
//         </Box>
//     )

// })}