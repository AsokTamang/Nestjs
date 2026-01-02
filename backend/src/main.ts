import { NestFactory, PartialGraphHost } from '@nestjs/core';
import { AppModule } from './app.module';
import fs from 'node:fs';
import { ValidationPipe } from '@nestjs/common';
import session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
    abortOnError: false,
  }); //this abortOnError property throws the actual error instead of exiting the code when any error occures in our app
  
  app.useGlobalPipes(
    //this configuration of validation pipe must be before the running of app
    new ValidationPipe({  //this validation pipe helps to prevent from the input of wrong data
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  app.use(
    session({
      secret: process.env.secret!, //as the secret is given in .env file
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true, //here we are using httponly to true so that cookie cannot be accessed via javascript which prevents from hacking of data
        secure: false, //as we are in dev mode , we are setting secure or https to false
        sameSite: 'lax',
      },
    }),
  );
 
  await app.listen(process.env.PORT ?? 3000, () =>
    console.log(`nest app running at port:http://localhost:${3000}`),
  );
}
bootstrap().catch((err) => {
  fs.writeFileSync('graph.json', PartialGraphHost.toString() ?? '');
  process.exit(1);
});
