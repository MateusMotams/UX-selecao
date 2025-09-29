import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ValidationPipe} from '@nestjs/common';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';


async function bootstrap() {
    //cria uma instancia da aplicação NestJS usando o módulo raiz AppModule
    const app = await NestFactory.create(AppModule);

    //habilita a validação global de DTOs usando Class Validator
    app.useGlobalPipes(new ValidationPipe());

    //Configura o swagger para documentação da API
    const config = new DocumentBuilder()
        .setTitle('API de Exemplo')
        .setDescription('Documentação da API de Exemplo')
        .setVersion('1.0')
        .addTag('exemplo')
        .build();
        //Cria o documento Swagger com base na configuração e na aplicação
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    //inicia o servidor na porta 3000
    await app.listen(3000);
    
    
}