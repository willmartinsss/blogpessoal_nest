import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  process.env.TZ = '-03:30'

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({
    origin: 'https://meusite.com', // Substitua pelo domínio permitido
    methods: 'GET,POST,PUT,DELETE', // Métodos permitidos
    allowedHeaders: 'Content-Type, Authorization', // Cabeçalhos permitidos
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
