import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { HomepageResolverBase } from "./base/homepage.resolver.base";
import { Homepage } from "./base/Homepage";
import { HomepageService } from "./homepage.service";

@graphql.Resolver(() => Homepage)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class HomepageResolver extends HomepageResolverBase {
  constructor(
    protected readonly service: HomepageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
