//When we ask for data, this tells us WHAT data we will get back.
//This is where we add our database calls and where we return our data.

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
  }
};