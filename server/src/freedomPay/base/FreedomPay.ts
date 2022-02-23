/*
//------------------------------------------------------------------------------ 
// This code was generated by Amplication. 
// 
// Changes to this file will be lost if the code is regenerated. 
//
// There are other ways to to customize your code, see this doc to learn more
// https://docs.amplication.com/docs/how-to/custom-code
//
//------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Address } from "../../address/base/Address";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsEnum,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumFreedomPayFreedomOfPay } from "./EnumFreedomPayFreedomOfPay";
import { Homepage } from "../../homepage/base/Homepage";
@ObjectType()
class FreedomPay {
  @ApiProperty({
    required: false,
    type: () => Address,
  })
  @ValidateNested()
  @Type(() => Address)
  @IsOptional()
  address?: Address | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    enum: EnumFreedomPayFreedomOfPay,
  })
  @IsEnum(EnumFreedomPayFreedomOfPay)
  @IsOptional()
  @Field(() => EnumFreedomPayFreedomOfPay, {
    nullable: true,
  })
  freedomOfPay?: "Yes" | "No" | null;

  @ApiProperty({
    required: false,
    type: () => [Homepage],
  })
  @ValidateNested()
  @Type(() => Homepage)
  @IsOptional()
  homepages?: Array<Homepage>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { FreedomPay };
