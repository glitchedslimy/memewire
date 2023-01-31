
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './mememodule/auth/auth.module';
import { SearchMemeModuleGraphQL } from './mememodule/search-meme/infrastructure/search-meme.resolver';
import { SearchMemeModule } from './mememodule/search-meme/search-meme.module';
import { UserModule } from './mememodule/user/user.module';
console.log(process.cwd())
@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
    sortSchema: true
  }),
  SearchMemeModule,
  AuthModule,
  UserModule,
  MongooseModule.forRoot(`mongodb+srv://Memewire:${process.env.MONGODB_PASS}@cluster0.ceoof.mongodb.net/memewire?retryWrites=true&w=majority`)
  ],
  controllers: [AppController],
  providers: [AppService, SearchMemeModuleGraphQL],
  exports: []
})
export class AppModule {}
