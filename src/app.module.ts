import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorModule } from './vendor/vendor.module';
import { Vendor } from './vendor/entities/vendor.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: "root@123",
      database: 'blockchain',
      entities: [Vendor],
      synchronize: true,
    }),
    VendorModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
