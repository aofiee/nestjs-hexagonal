import { Module } from '@nestjs/common';
import { OrderController } from './adapters/controllers/order.controller';
import { OrderService } from './services/order.service';
import { OrderRepository } from './domain/ports/order.repository';
import { OrderRepositoryImpl } from './adapters/db/order.repository.impls';

@Module({
  imports: [],
  controllers: [OrderController],
  providers: [
    OrderService,
    {
      provide: OrderRepository,
      useClass: OrderRepositoryImpl,
    },
  ],
})
export class AppModule {
  // function body
}
