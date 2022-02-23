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
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { FreedomPayService } from "../freedomPay.service";
import { FreedomPayCreateInput } from "./FreedomPayCreateInput";
import { FreedomPayWhereInput } from "./FreedomPayWhereInput";
import { FreedomPayWhereUniqueInput } from "./FreedomPayWhereUniqueInput";
import { FreedomPayFindManyArgs } from "./FreedomPayFindManyArgs";
import { FreedomPayUpdateInput } from "./FreedomPayUpdateInput";
import { FreedomPay } from "./FreedomPay";
import { HomepageFindManyArgs } from "../../homepage/base/HomepageFindManyArgs";
import { Homepage } from "../../homepage/base/Homepage";
@swagger.ApiBearerAuth()
export class FreedomPayControllerBase {
  constructor(
    protected readonly service: FreedomPayService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "FreedomPay",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: FreedomPay })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: FreedomPayCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<FreedomPay> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "FreedomPay",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"FreedomPay"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        address: data.address
          ? {
              connect: data.address,
            }
          : undefined,
      },
      select: {
        address: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        freedomOfPay: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "FreedomPay",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [FreedomPay] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(FreedomPayFindManyArgs)
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<FreedomPay[]> {
    const args = plainToClass(FreedomPayFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "FreedomPay",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        address: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        freedomOfPay: true,
        id: true,
        updatedAt: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "FreedomPay",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: FreedomPay })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: FreedomPayWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<FreedomPay | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "FreedomPay",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        address: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        freedomOfPay: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "FreedomPay",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: FreedomPay })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: FreedomPayWhereUniqueInput,
    @common.Body()
    data: FreedomPayUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<FreedomPay | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "FreedomPay",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"FreedomPay"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          address: data.address
            ? {
                connect: data.address,
              }
            : undefined,
        },
        select: {
          address: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          freedomOfPay: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "FreedomPay",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: FreedomPay })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: FreedomPayWhereUniqueInput
  ): Promise<FreedomPay | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          address: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          freedomOfPay: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id/homepages")
  @nestAccessControl.UseRoles({
    resource: "FreedomPay",
    action: "read",
    possession: "any",
  })
  @ApiNestedQuery(HomepageFindManyArgs)
  async findManyHomepages(
    @common.Req() request: Request,
    @common.Param() params: FreedomPayWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Homepage[]> {
    const query = plainToClass(HomepageFindManyArgs, request.query);
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Homepage",
    });
    const results = await this.service.findHomepages(params.id, {
      ...query,
      select: {
        createdAt: true,
        email: true,

        freedomPay: {
          select: {
            id: true,
          },
        },

        id: true,
        mobileNumber: true,
        password: true,
        updatedAt: true,
        username: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post("/:id/homepages")
  @nestAccessControl.UseRoles({
    resource: "FreedomPay",
    action: "update",
    possession: "any",
  })
  async createHomepages(
    @common.Param() params: FreedomPayWhereUniqueInput,
    @common.Body() body: FreedomPayWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      homepages: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "FreedomPay",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"FreedomPay"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id/homepages")
  @nestAccessControl.UseRoles({
    resource: "FreedomPay",
    action: "update",
    possession: "any",
  })
  async updateHomepages(
    @common.Param() params: FreedomPayWhereUniqueInput,
    @common.Body() body: FreedomPayWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      homepages: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "FreedomPay",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"FreedomPay"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id/homepages")
  @nestAccessControl.UseRoles({
    resource: "FreedomPay",
    action: "update",
    possession: "any",
  })
  async deleteHomepages(
    @common.Param() params: FreedomPayWhereUniqueInput,
    @common.Body() body: FreedomPayWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      homepages: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "FreedomPay",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"FreedomPay"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}