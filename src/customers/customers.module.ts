import { Module, forwardRef } from '@nestjs/common';
import { CustomerService } from './services/customers.service';
import { CustomerController } from './customers.controller';
import { CustomerRepository } from './repository/customer.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerSchema } from './entities/customer.schema';
import { AuthModule } from 'src/auth/auth.module';
import { JwtStrategy } from 'src/auth/jwt/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Customer',
        schema: CustomerSchema,
      },
    ]),
    forwardRef(() => AuthModule),
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [CustomerController],
  providers: [CustomerService, CustomerRepository, JwtStrategy],
})
export class CustomersModule {}
