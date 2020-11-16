//When we ask for data, this tells us WHAT data we will get back.
//This is where we add our database calls and where we return our data.

export const habitsResolvers = {
    Query: {
        async habits() {
            console.log('habits');
            return [{
                _id: 'somefunkyarray',
                name: 'Make my bed'
            }]
        }
    }
}