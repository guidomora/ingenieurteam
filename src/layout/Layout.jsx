import React from 'react'
import Header from '../ui/header/Header'
import { Footer } from '../ui/footer/Footer'


const Layout = ({ children }) => {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                {children}
            </main>
            <footer >
                <Footer />
            </footer>
        </>
    )
}

export default Layout