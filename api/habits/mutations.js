//This is where post requests happen
//AKA, a REST server, IE "Add a habit"

export const habitsMutations = {
    Mutation: {
        async addHabit(_, { habit }) {
            console.log('add habit');
        }
    }
}