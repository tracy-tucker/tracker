import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import { withApollo } from '../lib/apollo'; //importing in the higher-order component
import { useQuery } from '@apollo/react-hooks'; //React hook for Apollo queries to import a REAL API query
import gql from 'graphql-tag'; //in order to write graphql queries

//Created a new GraphQL Query
//used gql-tag "gql '' " to wrap the query
//the query itself has a standard name of HelloQuery
const HELLO_QUERY = gql `
  query HelloQuery {
    sayHello
  }
`;

// const HELLO_QUERY = gql `
//   query HelloQuery {
//     company {
//       ceo
//     }
//   }
// `;

  const Home = () => {
    // create the function to pass in API queries
      const { data, loading, error } = useQuery(HELLO_QUERY);
      if (loading) return <main />; //<div /> or <main /> ???
      console.log(data);
    
    return (

      <Layout className={styles.container}>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Level Up Your Life
            {/* {data.company.ceo} */}
          </h1>

        </main>

      </Layout>
    
    )

  }

export default withApollo(Home); //wrapping Home in to the higher-order component
