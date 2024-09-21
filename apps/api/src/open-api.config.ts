import { DocumentBuilder } from '@nestjs/swagger'

export const openApiConfig = new DocumentBuilder()
  .setTitle('OthTix API')
  .setDescription('OthTix API docs')
  .setVersion('1.0')
  .addBearerAuth()
  .build()
