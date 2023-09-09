import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({
    origin: true,
  });
  const config = new DocumentBuilder()
    .setTitle('Firebase Messaging API Swagger UI')
    .setDescription(
      'This API can be use to send message with Google Firebase Cloud Messaging ',
    )
    .setVersion('1.0')
    .addTag('fcm apies')
    .setBasePath('API')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  app.setGlobalPrefix('API');
  await app.listen(process.env.SERVER_PORT || 3000, () => {
    console.log('Server started succesfuly with', process.env.SERVER_PORT);
  });
}
bootstrap();
