import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { HomepageServiceBase } from "./base/homepage.service.base";

@Injectable()
export class HomepageService extends HomepageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
