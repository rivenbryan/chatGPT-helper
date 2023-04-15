import React from 'react';
import { UnstyledButton, Modal, Group, Text, Button } from '@mantine/core';
import { AiFillDelete, AiFillInfoCircle } from "react-icons/ai";
import Model from './Model';
import { useDisclosure } from '@mantine/hooks';
import SidebarAboutModel from './SideBarFooter/AboutModel';
import SidebarClearConversation from './SideBarFooter/ClearConversation';
export default function SideBarFooter() {

  return (
    <>
    <SidebarAboutModel/>
    <SidebarClearConversation/>
    </>
  )
}
