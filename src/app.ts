import express from 'express';
import { router } from './routes';
import cors from 'cors';

export function createApp(){
    const app = express()

    app.use(express.json())
    
    app.use("/api", router)

    const corsOptions = {
        origin: 'http://localhost:3333',
        methods: ['GET']
    }

    app.use(cors(corsOptions))

    return app
}
