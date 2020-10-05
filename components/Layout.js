import Head from 'next/head'
import Nav from './nav'

const Layout = ({children}) => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout;