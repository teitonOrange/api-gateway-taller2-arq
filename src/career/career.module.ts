import { Module } from '@nestjs/common';
import { CareerController } from './career.controller';
import { CareerService } from './career.service';
import { CareerGrpcClient } from './career-grpc-client';

@Module({
  controllers: [CareerController],
  providers: [CareerService, CareerGrpcClient]
})
export class CareerModule {}
