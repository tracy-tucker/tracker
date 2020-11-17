//creating a new route

//req/res using ApolloServer
import { ApolloServer, gql } from 'apollo-server-micro';
import { mergeResolvers, mergeTypeDefs } from 'graphql-tools';
import connectDb from '../../lib/mongoose';
import { habitsResolvers } from '../../api/habits/resolvers';
import { habitsMutations } from '../../api/habits/mutations';
import Habits from '../../api/habits/Habits.graphql';
//THIS IS THE THING YOU WANT TO HIT
//This is defining the query APIs that we have available
//Query = resolver function
//sayHello = resolver name, String = type of data it returns
const fakeTypeDefs = gql`
    type Query {
        sayHello: String
    }
`
//THIS IS WHAT HAPPENS WHEN YOU HIT IT
//Define the resolvers
//Resolvers are what runs when we query the API
const fakeResolvers = {
    Query: {
        sayHello: () => { //a normal resolver would return parent args
            return "Hello Level Up!";
        }
    }
}

const resolvers = mergeResolvers([
    fakeResolvers,
    habitsResolvers,
    habitsMutations
]);

const typeDefs = mergeTypeDefs([fakeTypeDefs, Habits]);

//Create the Apollo Server
const apolloServer = new ApolloServer({ typeDefs, resolvers }); //passing in the above created functions

export const config = {
    api: {
        bodyParser: false //turning off bodyParser for this route
    }
}

const server = apolloServer.createHandler({ path: '/api/graphql' }); //The path where to send the response
export default connectDb(server);

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