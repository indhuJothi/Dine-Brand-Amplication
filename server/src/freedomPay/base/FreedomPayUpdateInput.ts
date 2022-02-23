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
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AddressWhereUniqueInput } from "../../address/base/AddressWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumFreedomPayFreedomOfPay } from "./EnumFreedomPayFreedomOfPay";
@InputType()
class FreedomPayUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AddressWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AddressWhereUniqueInput)
  @IsOptional()
  @Field(() => AddressWhereUniqueInput, {
    nullable: true,
  })
  address?: AddressWhereUniqueInput | null;

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
}
export { FreedomPayUpdateInput };