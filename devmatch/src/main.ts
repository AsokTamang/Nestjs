import { NestFactory, PartialGraphHost } from '@nestjs/core';
import { AppModule } from './app.module';
import fs from 'node:fs';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
    abortOnError: false,
  }); //this abortOnError property throws the actual error instead of exiting the code when any error occures in our app
  app.useGlobalPipes(   //this configuration of validation pipe must be before the running of app
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
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
