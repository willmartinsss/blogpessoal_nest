import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Blog Pessoal')
    .setDescription('Projeto Blog Pessoal')
    .setContact(
      'William Martins',
      'http://',
      'williammartins323@gmail.com',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);
  
  process.env.TZ = '-03:30'

  app.useGlobalPipes(new ValidationPipe());

  //lembrar que toda vez que tiver uma nova url atualizar aqui
  app.enableCors({    
    origin: [
      'http://localhost:5173',
      'http://localhost:3000', 
      'https://blogpessoal-nest-nmj3.onrender.com', // Produção
      'https://blogpessoal-react-mauve.vercel.app', 

    ],
    methods: 'GET,POST,PUT,DELETE', // Métodos permitidos
    allowedHeaders: 'Content-Type, Authorization', // Cabeçalhos permitidos
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
