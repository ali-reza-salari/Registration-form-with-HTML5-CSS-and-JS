import express from "express"
import fs from "fs"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.post("/api/create-user" , (req , res) => {
    const newUser = req.body
    const usersFile = fs.readFileSync("./server/usersData.json", "utf-8")
    const parsedUsers = JSON.parse(usersFile)

    parsedUsers.push(newUser)
    fs.writeFileSync("./server/usersData.json", JSON.stringify(parsedUsers, null, 4))

    res.status(201).send("user creation successfully :))")
    res.end()
})

app.listen(3000 , () => {
    console.log("Server is running on port 3000")
})