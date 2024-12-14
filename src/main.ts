import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app1 = await NestFactory.create(AppModule);
  app1.enableCors();
  await app1.listen(process.env.PORT ?? 3001);

  // const app2 = await NestFactory.createMicroservice<MicroserviceOptions>
  // (AppModule, {
  //   transport: Transport.GRPC,
  //     options: {
  //       package: 'career',
  //       protoPath: [
  //         join(__dirname, 'career/career.proto'),
  //       ],
  //       url: localhost:5000,
  //     },
  //   },
  // );
}
bootstrap();
