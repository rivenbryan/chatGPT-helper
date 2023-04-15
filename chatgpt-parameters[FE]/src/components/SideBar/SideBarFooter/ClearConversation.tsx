
import { UnstyledButton, Group, Text } from '@mantine/core';
import { AiFillDelete } from "react-icons/ai";
import { useContext } from 'react';
import { ChatMessageContext } from '../../../contexts/ChatMessageContext';
export default function SidebarClearConversation() {
    const { apiTriggerFlag, setAllChatMessage, setAllUserMessage} = useContext(ChatMessageContext);
    const handleDelete = () => {
        apiTriggerFlag.current = false
        setAllChatMessage([])
        setAllUserMessage([])
        
    }
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
            <Group onClick={handleDelete}>
                <AiFillDelete />
                <Text size="sm">Delete Conversations</Text>
            </Group>
        </UnstyledButton>
    )
}