import { UseGuards } from "@nestjs/common";
import { Query, Resolver } from "@nestjs/graphql";
import { IUser } from "src/app/shared";
import { GqlAuthGuard } from "../../auth/authguards/auth-jwt-extend.authguard";
import { CurrentUser } from "../../user/decorators/user.decorator";

@Resolver()
export class SearchMemeModuleGraphQL {
    @Query(() => Boolean)
    @UseGuards(GqlAuthGuard)
    async getMeme(@CurrentUser() user: IUser): Promise<any> {
        return true
    }
}