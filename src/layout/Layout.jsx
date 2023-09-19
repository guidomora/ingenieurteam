import React from 'react'
import Header from '../ui/header/Header'

const Layout = ({ children }) => {
    return (
        <>
            <title>Ingenieur Team</title>

            <header>
                <Header />
            </header>
            <main>
                {children}
            </main>

            <footer >

            </footer>
        </>
    )
}

export default Layout