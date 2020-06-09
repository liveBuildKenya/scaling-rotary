import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = 3000;
  const app = await NestFactory.create(AppModule);
  app.enableCors({origin: 'http://localhost:4200'});
  console.log(`Application listening at port ${port}`);
  await app.listen(port);
}
bootstrap();
