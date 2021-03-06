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
import { PrismaService } from "nestjs-prisma";
import { Prisma, FreedomPay, Homepage, Address } from "@prisma/client";

export class FreedomPayServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.FreedomPayFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FreedomPayFindManyArgs>
  ): Promise<number> {
    return this.prisma.freedomPay.count(args);
  }

  async findMany<T extends Prisma.FreedomPayFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FreedomPayFindManyArgs>
  ): Promise<FreedomPay[]> {
    return this.prisma.freedomPay.findMany(args);
  }
  async findOne<T extends Prisma.FreedomPayFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FreedomPayFindUniqueArgs>
  ): Promise<FreedomPay | null> {
    return this.prisma.freedomPay.findUnique(args);
  }
  async create<T extends Prisma.FreedomPayCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FreedomPayCreateArgs>
  ): Promise<FreedomPay> {
    return this.prisma.freedomPay.create<T>(args);
  }
  async update<T extends Prisma.FreedomPayUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FreedomPayUpdateArgs>
  ): Promise<FreedomPay> {
    return this.prisma.freedomPay.update<T>(args);
  }
  async delete<T extends Prisma.FreedomPayDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FreedomPayDeleteArgs>
  ): Promise<FreedomPay> {
    return this.prisma.freedomPay.delete(args);
  }

  async findHomepages(
    parentId: string,
    args: Prisma.HomepageFindManyArgs
  ): Promise<Homepage[]> {
    return this.prisma.freedomPay
      .findUnique({
        where: { id: parentId },
      })
      .homepages(args);
  }

  async getAddress(parentId: string): Promise<Address | null> {
    return this.prisma.freedomPay
      .findUnique({
        where: { id: parentId },
      })
      .address();
  }
}
