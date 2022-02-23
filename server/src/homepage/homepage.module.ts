import { Module } from "@nestjs/common";
import { HomepageModuleBase } from "./base/homepage.module.base";
import { HomepageService } from "./homepage.service";
import { HomepageController } from "./homepage.controller";
import { HomepageResolver } from "./homepage.resolver";

@Module({
  imports: [HomepageModuleBase],
  controllers: [HomepageController],
  providers: [HomepageService, HomepageResolver],
  exports: [HomepageService],
})
export class HomepageModule {}
