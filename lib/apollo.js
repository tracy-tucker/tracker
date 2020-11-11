import ApolloClient from 'apollo-boost';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/react-hooks';
import fetch from 'isomorphic-unfetch';
import { InMemoryCache } from 'apollo-cache-inmemory';

//function that passes in actual page components as an argument
export function withApollo(PageComponent) {
  //creating the react component that passes in props
  const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
     //wrapping the apollo client provider around our page components
    const client = apolloClient || initApolloClient(apolloState); //Initializes the API on our server

    return (
      <ApolloProvider client={client}> {/* Connects the API on our server to the frontend (ui) of our code */}
        <PageComponent {...pageProps} /> {/* This is a pass-through for the component that needs to get passed through. It is also passing in props to the page component */}
      </ApolloProvider>
    );
  };

  // get data ready to work with server-side rendering
  // getInitialProps = react lifecycle method that does not exist in standard react
  // ctx = passing in all the site context (headers, layouts)
  // AppTree is the entire tree of your application
  WithApollo.getInitialProps = async ctx => {
    const { AppTree } = ctx;
    const apolloClient = (ctx.apollClient = initApolloClient());

    let pageProps = {};
    if (PageComponent.getInitialProps) {
      pageProps = await PageComponent.getInitialProps(ctx);
    }

    //This is for server side rendering only
    //If on server...
    if (typeof window === 'undefined') {
      if (ctx.res && ctx.res.finished) {
        return pageProps;
      }

      //getDataFromTree is a predefined Apollo method
      try {
        const { getDataFromTree } = await import('@apollo/react-ssr');
        await getDataFromTree(
          <AppTree
            pageProps={{
              ...pageProps,
              apolloClient
            }}
          />
        );
      } catch (e) {
        console.error(e);
      }

      //If you want your header stuff, then you need to clear it with this rewind.
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

const initApolloClient = (initialState = {}) => {
  const ssrMode = typeof window === 'undefined';
  const cache = new InMemoryCache().restore(initialState);

  const client = new ApolloClient({
    ssrMode,
    uri: 'https://api.spacex.land/graphql/', //Testing a 3rd party API
    // uri: 'http://localhost:3000/api/graphql', //This is your KEY reference line to ANY local/3rd party API
    fetch,
    cache
  });
  return client;
};