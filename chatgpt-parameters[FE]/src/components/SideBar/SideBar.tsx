import React, { useState } from 'react'
import { AppShell, Navbar, Header } from '@mantine/core';
import SideBarHeader from './SideBarHeader';
import SideBarChat from './SideBarChat';
import SideBarFooter from './SideBarFooter';
type Props = {}

export default function SideBar({ }: Props) {
  return (
    <Navbar height={800} p="xs" width={{ base: 300 }}>
      <Navbar.Section>
        <SideBarHeader />
      </Navbar.Section>
      <Navbar.Section>
        <SideBarChat />
      </Navbar.Section>
      <Navbar.Section>
        <SideBarFooter />
      </Navbar.Section>


    </Navbar>
  )
}