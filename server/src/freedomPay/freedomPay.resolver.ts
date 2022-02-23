import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { FreedomPayResolverBase } from "./base/freedomPay.resolver.base";
import { FreedomPay } from "./base/FreedomPay";
import { FreedomPayService } from "./freedomPay.service";

@graphql.Resolver(() => FreedomPay)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class FreedomPayResolver extends FreedomPayResolverBase {
  constructor(
    protected readonly service: FreedomPayService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
