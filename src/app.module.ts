import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { ProjectModule } from './project/project.module';
import { CustomerModule } from './customer/customer.module';
import { EntrepreneurModule } from './entrepreneur/entrepreneur.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule, 
    ProjectModule, 
    CustomerModule, 
    EntrepreneurModule
  ],
})
export class AppModule {}
