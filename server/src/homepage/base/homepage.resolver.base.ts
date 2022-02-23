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
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateHomepageArgs } from "./CreateHomepageArgs";
import { UpdateHomepageArgs } from "./UpdateHomepageArgs";
import { DeleteHomepageArgs } from "./DeleteHomepageArgs";
import { HomepageFindManyArgs } from "./HomepageFindManyArgs";
import { HomepageFindUniqueArgs } from "./HomepageFindUniqueArgs";
import { Homepage } from "./Homepage";
import { FreedomPay } from "../../freedomPay/base/FreedomPay";
import { HomepageService } from "../homepage.service";

@graphql.Resolver(() => Homepage)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class HomepageResolverBase {
  constructor(
    protected readonly service: HomepageService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Homepage",
    action: "read",
    possession: "any",
  })
  async _homepagesMeta(
    @graphql.Args() args: HomepageFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Homepage])
  @nestAccessControl.UseRoles({
    resource: "Homepage",
    action: "read",
    possession: "any",
  })
  async homepages(
    @graphql.Args() args: HomepageFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Homepage[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Homepage",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Homepage, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Homepage",
    action: "read",
    possession: "own",
  })
  async homepage(
    @graphql.Args() args: HomepageFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Homepage | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Homepage",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Homepage)
  @nestAccessControl.UseRoles({
    resource: "Homepage",
    action: "create",
    possession: "any",
  })
  async createHomepage(
    @graphql.Args() args: CreateHomepageArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Homepage> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Homepage",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Homepage"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        freedomPay: args.data.freedomPay
          ? {
              connect: args.data.freedomPay,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Homepage)
  @nestAccessControl.UseRoles({
    resource: "Homepage",
    action: "update",
    possession: "any",
  })
  async updateHomepage(
    @graphql.Args() args: UpdateHomepageArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Homepage | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Homepage",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Homepage"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          freedomPay: args.data.freedomPay
            ? {
                connect: args.data.freedomPay,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Homepage)
  @nestAccessControl.UseRoles({
    resource: "Homepage",
    action: "delete",
    possession: "any",
  })
  async deleteHomepage(
    @graphql.Args() args: DeleteHomepageArgs
  ): Promise<Homepage | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => FreedomPay, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Homepage",
    action: "read",
    possession: "any",
  })
  async freedomPay(
    @graphql.Parent() parent: Homepage,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<FreedomPay | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "FreedomPay",
    });
    const result = await this.service.getFreedomPay(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
