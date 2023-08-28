import type { Metadata } from 'next'
import Recoil from "@/recoil";
import ReactQuery from "@/react-query";
import StyledComponentsRegistry from '@/lib/registry';
// import GlobalStyles from '@/styles/GlobalStyles';
import React from "react";

export const metadata: Metadata = {
  title: 'Next App',
  description: 'Generated by create next app',
}

const RootLayout=({
  children,
}: {
  children: React.ReactNode
})=> {
  return (
    <html lang="en">
      <body>
      <Recoil><ReactQuery>
        <StyledComponentsRegistry>
          {/* <GlobalStyles/> */}
      <nav>
        Main layout
      </nav>
      {children}
      </StyledComponentsRegistry>
      </ReactQuery>
      </Recoil>
      </body>
    </html>
  )
}

export default RootLayout;
