import React from 'react'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <section className="layout flex">
        {children}
    </section>
  )
}

export default Layout