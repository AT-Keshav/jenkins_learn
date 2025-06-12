import express  from "express";
import cors from 'cors';
import fetch from 'node-fetch';

const app = express()

const port = 8000;

app.use(cors());
app.use(express.json());

const Url = "https://jsonplaceholder.typicode.com/posts"

const fetchData = async () => {
    const resp = await fetch(Url)
    const body = await resp.json()
    return body
}

app.get("/traditional", async (req, resp) => {
    fetchData().then((data) => {
        return resp.json(data)
    }).catch((err) => {
        resp.status(400).json({"error": err})
    })
})

app.get("/modran", async (req, resp) => {
    try {
        const response = await fetchData()
        const body = await response.json()
        resp.status(200).json({"message": body})
    } catch (error) {
        resp.status(400).json({"error": error})
    }
})
app.listen(port, () => {
    console.log(`Server started at the port ${port}`)
})
