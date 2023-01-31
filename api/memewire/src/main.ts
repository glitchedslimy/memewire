import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import helmet from 'helmet';
import config from './app/memewire.config'
import { LoggerService } from './app/shared/services/logger.service';
import { Logger } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new LoggerService()
  });
  const globalPrefix = config.globalPrefix;
  const defaultVersion = config.defaultVersion;
  app.setGlobalPrefix(globalPrefix);

  const port = process.env.PORT || 4042
  app.enableCors();
  app.use(helmet({ contentSecurityPolicy: (process.env.NODE_ENV === 'production') ? undefined : false}))
  if(config.isDev) {
    const options = new DocumentBuilder()
    .setTitle(config.swagger.title ?? 'Default Name')
    .setDescription(config.swagger.description ?? 'Default Description')
    .setVersion(config.swagger.version)
    .addBearerAuth()
    .build();

    const swaggerDoc = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup(globalPrefix + '/v' + defaultVersion + '/openapi', app, swaggerDoc)
  }
  await app.listen(port);
  Logger.log(`🚀 Started API on: \u001b[35mhttp://localhost:${port}/api\u001b[0m`)
  Logger.log(`📦 Started Swagger on: \u001b[35mhttp://localhost:${port}/api/v${defaultVersion}/openapi\u001b[0m`)
  Logger.log(`📈 Started graphql on: \u001b[35mhttp://localhost:${port}/api/graphql\u001b[0m`)
}
bootstrap();
