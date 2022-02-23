import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FreedomPayService } from "./freedomPay.service";
import { FreedomPayControllerBase } from "./base/freedomPay.controller.base";

@swagger.ApiTags("freedom-pays")
@common.Controller("freedom-pays")
export class FreedomPayController extends FreedomPayControllerBase {
  constructor(
    protected readonly service: FreedomPayService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
