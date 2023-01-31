import { Inject, Injectable } from "@nestjs/common";
import { SEARCH_MEME_REPOSITORY_PROVIDER } from "src/app/shared/constants/repositories.constants";
import { SearchMemeModuleRepository } from "../domain/search-meme.repository";

@Injectable()
export class GetSearchMemeModuleUseCase {
    constructor(@Inject(SEARCH_MEME_REPOSITORY_PROVIDER) private repository: SearchMemeModuleRepository) {}
    
    async getMeme(): Promise<any> {
        return this.repository.getMeme();
    }
}