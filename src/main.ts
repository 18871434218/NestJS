import { NestFactory } from '@nestjs/core';
import { MainModule } from './Module/main.module';

async function bootstrap() {
  const app = await NestFactory.create(MainModule); // 创建应用实例
  await app.listen(3000);
}
bootstrap();
