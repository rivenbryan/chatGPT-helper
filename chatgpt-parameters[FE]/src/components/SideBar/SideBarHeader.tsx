import React from 'react'
import { Button, Box } from '@mantine/core';
import { FaPlus } from "react-icons/fa";
type Props = {}

export default function SideBarHeader({ }: Props) {
    return (
        <Box
            sx={(theme) => ({
                paddingBottom: theme.spacing.lg,
                borderBottom: `1px solid ${theme.colors.gray[2]}`,
            })}
        >

            <Button variant="default" radius="md" size="md" fullWidth style={{
                textAlign: 'left',
                display: 'flex',
                placeItems: 'center flex-start',
                
            }}>

                <FaPlus style={{ marginRight: '0.5rem' }} /> New chat
            </Button>
        </Box>

    )
}