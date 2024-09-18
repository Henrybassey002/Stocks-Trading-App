import axios from 'axios'

const TOKEN = "criu2e9r01qo3ctc29tgcriu2e9r01qo3ctc29u0"

export default axios.create({
    baseURL: "https://finnhub.io/api/v1",
    params: {
        token: TOKEN
    } 
}) 