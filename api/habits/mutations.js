//This is where post requests happen
//AKA, a REST server, IE "Add a habit"
import Habits from './habits'

export const habitsMutations = {
    Mutation: {
        async addHabit(_, { habit }) {
            try {
                const newHabit = await Habits.create({
                    ...habit
                })
                return newHabit;
            } catch (e) {
                console.log(e)
            }
        }
    }
}