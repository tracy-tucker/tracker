import ApolloClient from 'apollo-boost';
import Head from 'next/head'
import { ApolloProvider } from '@apollo/react-hooks';

//function that passes in page components as an argument
export function withApollo (PageComponent) {
    //creating the react component that passes in props
    const WithApollo = props => {
        
        const client = initApolloClient();

        return (

            <ApolloProvider client={client}> {/* This connects the API on our server to the frontend (ui) of our code */}
                <PageComponent {...props} /> {/* This is a pass-through for the component that needs to get passed through */}
            </ApolloProvider>

        );

    };
    //get data ready to work with server-side rendering
    WithApollo.getInitialProps = async (ctx) => {
        const { AppTree } = ctx;
        const apolloClient = (ctx.apolloClient = initApolloClient())

        let pageProps = {}
        if(PageComponent.getInitialProps) {
            pageProps = await PageComponent.getInitialProps(ctx);
        }

        if(typeof window == "undefined") {
            if(ctx.res && ctx.res.finished) {
                return pageProps
            }

            try {
                const { getDataFromTree} = await import('@apollo/react-ssr')
                await getDataFromTree(
                    <AppTree
                        pageProps={{
                            ...pageProps,
                            apolloClient
                        }}
                    />
                )
            } catch (e) {
                console.error(e);
            }
            Head.rewind();
        }
        const apolloState = apolloClient.cache.extract();
        return {
            ...pageProps,
            apolloState
        };
    };


    return WithApollo;
}


const initApolloClient = () => {
    const client = new ApolloClient({
        uri: 'http://localhost:3000/api/graphql'
    });
    return client;
}