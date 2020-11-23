//When we ask for data, this tells us WHAT data we will get back.
//This is where we add our database calls and where we return our data.
//Copy and past this code for every project
import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';
import Habits from './habits';

export const habitsResolvers = {
  Query: {
    async habits() {
      try {
        const habits = await Habits.find();
        return habits;
      } catch (e) {
        console.log('e', e);
      }
    }
  },

  //Creating Date as a type
  Date: new GraphQLScalarType({
    name: 'Date',
    description: "Date custom scalar",
    parseValue(value) {
      return new Date(value); //value that the client creates, then sends to the DB
    },
    serialize(value) {
      return value.getTime() //sends that value as a string to the client
    },
    parseLiteral(ast) {
      if(ast.kind == Kind.INT) {
        return new Date(ast.value) //don't worry too much about this. This just finalizes the creation of the date.
      }
      return null;
    }
  })
};