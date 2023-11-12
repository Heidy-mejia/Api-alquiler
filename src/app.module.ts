import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertiesModule } from './properties/properti.module';
import { UserModule } from './users/users.module';
import { PaymentModule } from './payment/payment.module';
import { CustomerModule } from './customers/customer.module';
import { CategorytModule } from './categories/category.module';
import { AgreementModule } from './agreement/agreement.module';
import { FilesModule } from './files/files.module';



@Module({
  
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      username:'postgres',
      password:'12345678',
      port:5432,
      database:'alquiler',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize:true,

    }),
    PropertiesModule,
    UserModule,
    PaymentModule,
    CustomerModule,
    FilesModule,
    CategorytModule,
    AgreementModule,
    

   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

