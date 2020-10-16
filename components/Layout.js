import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import Head from 'next/head'
import Nav from '../components/nav'

const Layout = ({children, title}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <main> {/* wraps page conent with <main></main> tag */}
                {children} {/* page content goes here */}
            </main>
        </div>
    )
}

export default Layout;
