import { Module } from "@nestjs/common";
import { FreedomPayModuleBase } from "./base/freedomPay.module.base";
import { FreedomPayService } from "./freedomPay.service";
import { FreedomPayController } from "./freedomPay.controller";
import { FreedomPayResolver } from "./freedomPay.resolver";

@Module({
  imports: [FreedomPayModuleBase],
  controllers: [FreedomPayController],
  providers: [FreedomPayService, FreedomPayResolver],
  exports: [FreedomPayService],
})
export class FreedomPayModule {}
