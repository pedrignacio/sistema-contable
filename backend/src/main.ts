import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // Force restart for Prisma Client update
  try {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(process.env.PORT ?? 3001, '0.0.0.0');
    console.log(`Application is running on: ${await app.getUrl()}`);
    // Keep alive
    setInterval(() => {}, 10000);
  } catch (error) {
    console.error('Error starting app:', error);
  }
}
bootstrap();
