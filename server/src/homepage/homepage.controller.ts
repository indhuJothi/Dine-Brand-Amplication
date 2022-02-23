import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HomepageService } from "./homepage.service";
import { HomepageControllerBase } from "./base/homepage.controller.base";

@swagger.ApiTags("homepages")
@common.Controller("homepages")
export class HomepageController extends HomepageControllerBase {
  constructor(
    protected readonly service: HomepageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
