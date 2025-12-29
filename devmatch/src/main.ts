import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule,{abortOnError:false}); //this abortOnError property throws the actual error instead of exiting the code when any error occures in our app
  await app.listen(process.env.PORT ?? 3000,()=>console.log(`nest app running at port:http://localhost:${3000}`));
}
bootstrap();
