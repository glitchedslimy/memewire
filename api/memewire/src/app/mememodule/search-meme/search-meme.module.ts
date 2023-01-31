import { Module } from "@nestjs/common";
import { SEARCH_MEME_REPOSITORY_PROVIDER } from "src/app/shared/constants/repositories.constants";
import { GetSearchMemeModuleUseCase } from "./application/search-meme.use-case";
import { MongoSearchMemeModuleRepository } from "./infrastructure/mongo-search-meme.repository";
import { SearchMemeModuleController } from "./infrastructure/seach-meme.controller";
@Module({
    imports: [],
    providers: [
        GetSearchMemeModuleUseCase,
        { provide: SEARCH_MEME_REPOSITORY_PROVIDER, useClass: MongoSearchMemeModuleRepository}
    ],
    controllers: [SearchMemeModuleController]
})

export class SearchMemeModule {}