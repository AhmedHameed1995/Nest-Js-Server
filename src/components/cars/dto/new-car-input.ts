import { Field, InputType, Int } from "@nestjs/graphql";
import { Max, Min } from "class-validator";

@InputType()
export class NewCarInput {

    @Field()
    name: string
    
    @Field((type) => Int)
    monthlyPrice: number
    
    @Field((type) => Int)
    @Min(10, {message: "Daily Price can't be too low"})
    @Max(1000)
    dailyPrice: number
    
    @Field()
    mileage: string
    
    @Field()
    gas: string
    
    @Field()
    gearType: string
    
    @Field()
    thumbnailUrl: string
}