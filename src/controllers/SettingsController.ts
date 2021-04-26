import {Response, Request} from "express";
import { SettingsServece } from "../services/SettingsService";

class SettingsController{

    async create(request: Request, response: Response){
        const {chat, username} = request.body;
        
        const settingsService = new SettingsServece();

        try {
            const settings = await settingsService.create({chat, username});
        
        return response.json(settings);
        } catch (error) {
            return response.status(400).json({message : error.message});
        }

    }

    async findByUsername(request: Request, response: Response){
        const {username} = request.params;

        const settingsService = new SettingsServece();

        const settings = await settingsService.findByUsername(username);

        return response.json(settings);
    }

    async update(request: Request, response: Response){
        const {username} = request.params;
        const {chat} = request.body;

        const settingsService = new SettingsServece();

        const settings = await settingsService.update(username, chat);

        return response.json(settings);
    }
}

export { SettingsController }