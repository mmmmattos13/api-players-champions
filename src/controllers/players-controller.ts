import {Request, Response} from 'express';
import { createPlayerService, deletePlayerService, getPlayerByIdService, getPlayersService, updatePlayerService } from '../services/players-service';
import { noContent } from '../utils/http-helper';
import { PlayerModelStatistics } from '../models/statistics-model';


export const getPlayer = async (req: Request, res: Response) => {

    const httpResponse = await getPlayersService()
   

    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const httpResponse = await getPlayerByIdService(id)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const postPlayer = async (req: Request, res: Response) => {
    const bodyValue = req.body

    const httpResponse = await createPlayerService(bodyValue)

    if(httpResponse){
        res.status(httpResponse.statusCode).json(httpResponse.body)
    }else{
        const response = await noContent()
        res.status(response.statusCode).json(httpResponse.body)
    }    
}

export const deletePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const httpResponse = await deletePlayerService(id)
}

export const updatePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const bodyValue: PlayerModelStatistics = req.body
    const httpResponse = await updatePlayerService(id, bodyValue)
    res.status(httpResponse.statusCode).json(httpResponse.body)

}