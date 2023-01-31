import { Injectable } from "@nestjs/common";
import { SearchMemeModuleRepository } from "../domain/search-meme.repository";

@Injectable()

export class MongoSearchMemeModuleRepository implements SearchMemeModuleRepository {
    constructor() {}

    async getMeme(): Promise<any> {
        return true
    }
}