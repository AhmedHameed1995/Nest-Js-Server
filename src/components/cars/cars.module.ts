import { Module } from "@nestjs/common";
import { CarsService } from './cars.service';
import { CarResolver } from './cars.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './entities/car';

@Module({
    imports: [TypeOrmModule.forFeature([Car])],
    providers: [CarsService, CarResolver],
    exports: [CarsService]
})

export class CarsModule {}