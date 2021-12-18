import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  try {
    const PORT = process.env.PORT || 9666;
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
      .setTitle('Translation service')
      .setDescription('Translations service API')
      .setVersion('1.0.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);

    await app.listen(PORT, () =>
      console.log(`Server started on port = ${PORT}`),
    );
  } catch (e) {
    console.log(e);
  }
}
bootstrap();
