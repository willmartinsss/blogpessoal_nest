import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { ProdService } from './data/services/prod.services';
import { AuthModule } from './a/auth.module';
import { UsuarioModule } from './Usuarios/usuario.module';
import { TemaModule } from './tema/tema.module'; 
import { PostagemModule } from './postagem/postagem.module'; 

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useClass: ProdService,
      imports: [ConfigModule],
    }),
    AuthModule,
    UsuarioModule,
    TemaModule,
    PostagemModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
