import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [    
    AuthModule,ConfigModule.forRoot(),
  ]
})
export class AppModule {}
