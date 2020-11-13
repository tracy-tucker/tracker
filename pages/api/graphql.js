//creating a new route

import { redirect } from "next/dist/next-server/server/api-utils"
import '../../lib/mongoose';

//req/res using ApolloServer
import { ApolloServer, gql } from 'apollo-server-micro'

//THIS IS THE THING YOU WANT TO HIT
//This is defining the query APIs that we have available
//Query = resolver function
//sayHello = resolver name, String = type of data it returns
const typeDefs = gql`
    type Query {
        sayHello: String
    }
`
//THIS IS WHAT HAPPENS WHEN YOU HIT IT
//Define the resolvers
//Resolvers are what runs when we query the API
const resolvers = {
    Query: {
        sayHello: () => { //a normal resolver would return parent args
            return "Hello Level Up!";
        }
    }
}

//Create the Apollo Server
const apolloServer = new ApolloServer({ typeDefs, resolvers }); //passing in the above created functions

export const config = {
    api: {
        bodyParser: false //turning off bodyParser for this route
    }
}

export default apolloServer.createHandler({ path: '/api/graphql' }); //The path where to send the response

//NEXTJS EASY WAY OF CODING REQ/RES FUNCTION
//request comes in and returns a response
// export default (req, res) => { //both request and response are required
//     //sending back a response to the client
//     res.status(200).json({
//         test: "Hello Level Up"
//     });
// };


//LONG EXPLANATION WAY OF CODING REQ/RES FUNCTION
//request comes in and returns a response
// export default (req, res) => { //both request and response are required
//     //sending back a response to the client
//     res.setHeader('Content-Type', 'application/json') //seHeader tells the client what type of response this will be.
//     res.statusCode = 200 //200 means all good!
//     res.end(JSON.stringify ({ //converts the JS response object/value  to a JSON string
//         test: "Hello Level Up"
//     }))
// }