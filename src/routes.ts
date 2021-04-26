import { Router } from "express"
import { SettingsController } from "./controllers/SettingsController"
import { UsersController } from "./controllers/UsersController"
import { MessagesController } from "./controllers/MessagesController"


const routes = Router();
const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/Settings", settingsController.create);
routes.get("/Settings/:username", settingsController.findByUsername);
routes.put("/Settings/:username", settingsController.update);
routes.post("/Users", usersController.create);
routes.post("/Messages", messagesController.create);
routes.get("/Messages/:id", messagesController.showByUser);

export { routes };