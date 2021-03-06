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
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FreedomPayWhereInput } from "./FreedomPayWhereInput";
import { Type } from "class-transformer";
import { FreedomPayOrderByInput } from "./FreedomPayOrderByInput";

@ArgsType()
class FreedomPayFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FreedomPayWhereInput,
  })
  @Field(() => FreedomPayWhereInput, { nullable: true })
  @Type(() => FreedomPayWhereInput)
  where?: FreedomPayWhereInput;

  @ApiProperty({
    required: false,
    type: FreedomPayOrderByInput,
  })
  @Field(() => FreedomPayOrderByInput, { nullable: true })
  @Type(() => FreedomPayOrderByInput)
  orderBy?: FreedomPayOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FreedomPayFindManyArgs };
