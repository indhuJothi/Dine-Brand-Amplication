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
import { CreateFreedomPayArgs } from "./CreateFreedomPayArgs";
import { UpdateFreedomPayArgs } from "./UpdateFreedomPayArgs";
import { DeleteFreedomPayArgs } from "./DeleteFreedomPayArgs";
import { FreedomPayFindManyArgs } from "./FreedomPayFindManyArgs";
import { FreedomPayFindUniqueArgs } from "./FreedomPayFindUniqueArgs";
import { FreedomPay } from "./FreedomPay";
import { HomepageFindManyArgs } from "../../homepage/base/HomepageFindManyArgs";
import { Homepage } from "../../homepage/base/Homepage";
import { Address } from "../../address/base/Address";
import { FreedomPayService } from "../freedomPay.service";

@graphql.Resolver(() => FreedomPay)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class FreedomPayResolverBase {
  constructor(
    protected readonly service: FreedomPayService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "FreedomPay",
    action: "read",
    possession: "any",
  })
  async _freedomPaysMeta(
    @graphql.Args() args: FreedomPayFindManyArgs
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

  @graphql.Query(() => [FreedomPay])
  @nestAccessControl.UseRoles({
    resource: "FreedomPay",
    action: "read",
    possession: "any",
  })
  async freedomPays(
    @graphql.Args() args: FreedomPayFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<FreedomPay[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "FreedomPay",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => FreedomPay, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "FreedomPay",
    action: "read",
    possession: "own",
  })
  async freedomPay(
    @graphql.Args() args: FreedomPayFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<FreedomPay | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "FreedomPay",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => FreedomPay)
  @nestAccessControl.UseRoles({
    resource: "FreedomPay",
    action: "create",
    possession: "any",
  })
  async createFreedomPay(
    @graphql.Args() args: CreateFreedomPayArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<FreedomPay> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "FreedomPay",
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
        `providing the properties: ${properties} on ${"FreedomPay"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        address: args.data.address
          ? {
              connect: args.data.address,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => FreedomPay)
  @nestAccessControl.UseRoles({
    resource: "FreedomPay",
    action: "update",
    possession: "any",
  })
  async updateFreedomPay(
    @graphql.Args() args: UpdateFreedomPayArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<FreedomPay | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "FreedomPay",
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
        `providing the properties: ${properties} on ${"FreedomPay"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          address: args.data.address
            ? {
                connect: args.data.address,
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

  @graphql.Mutation(() => FreedomPay)
  @nestAccessControl.UseRoles({
    resource: "FreedomPay",
    action: "delete",
    possession: "any",
  })
  async deleteFreedomPay(
    @graphql.Args() args: DeleteFreedomPayArgs
  ): Promise<FreedomPay | null> {
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

  @graphql.ResolveField(() => [Homepage])
  @nestAccessControl.UseRoles({
    resource: "FreedomPay",
    action: "read",
    possession: "any",
  })
  async homepages(
    @graphql.Parent() parent: FreedomPay,
    @graphql.Args() args: HomepageFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Homepage[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Homepage",
    });
    const results = await this.service.findHomepages(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => Address, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "FreedomPay",
    action: "read",
    possession: "any",
  })
  async address(
    @graphql.Parent() parent: FreedomPay,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Address | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Address",
    });
    const result = await this.service.getAddress(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
