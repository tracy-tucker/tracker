//creating a new route

import { redirect } from "next/dist/next-server/server/api-utils"

//request comes in and returns a response
export default (req, res) => { //both request and response are required
    //sending back a response to the client
    res.setHeader('Content-Type', 'application/json') //seHeader tells the client what type of response this will be.
    res.statusCode = 200 //200 means all good!
    res.end(JSON.stringify ({ //converts the JS response object/value  to a JSON string
        test: "Hello Level Up"
    }))
}