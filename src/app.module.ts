import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { CareerModule } from './career/career.module';

@Module({
  imports: [    
    AuthModule,ConfigModule.forRoot(), CareerModule,
  ]
})
export class AppModule {}
