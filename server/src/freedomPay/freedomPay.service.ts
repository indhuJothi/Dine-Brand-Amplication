import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { FreedomPayServiceBase } from "./base/freedomPay.service.base";

@Injectable()
export class FreedomPayService extends FreedomPayServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
