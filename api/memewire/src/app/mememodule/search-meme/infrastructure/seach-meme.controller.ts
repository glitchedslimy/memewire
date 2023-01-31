import { Controller, Get, UseGuards } from "@nestjs/common";
import { SEARCH_MEME_CONTROLLER } from "src/app/shared/constants/controllers.constants";

@Controller(SEARCH_MEME_CONTROLLER)
export class SearchMemeModuleController {
    constructor() {}

    @Get() 
    async getMeme(): Promise<any> {
        return true
    }
}