import Head from 'next/head'
import Nav from './nav'

const Layout = () => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Nav />
        </div>
    )
}