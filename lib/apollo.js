import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

//function that passes in page components as an argument
export function withApollo (PageComponent) {
    //creating the react component that passes in props
    const WithApollo = props => {
        const client = new ApolloClient({
            uri: 'http://localhost:3000/api/graphql'
        });
        return (

            <ApolloProvider client={client}> {/* This connects the API on our server to the frontend (ui) of our code */}
                <PageComponent {...props} /> {/* This is a pass-through for the component that needs to get passed through */}
            </ApolloProvider>

        );
    };
    return WithApollo;
}