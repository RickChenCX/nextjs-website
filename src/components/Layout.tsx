import Navbar from './Navbar'
import Footer from './Footer'
import type { AppProps } from "next/app";
import React, { ReactElement, ReactNode } from 'react'


interface LayoutProps {
  children: ReactNode
}
export default function Layout({ children }: LayoutProps): ReactElement {
  return (
    <>
      <Navbar />
        <main>{children}</main>
      <Footer />
    </>
  )
}