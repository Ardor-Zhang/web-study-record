import {
  ForbiddenException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PaginationQueryDto } from 'src/dto/pagination-query.dto';

@Injectable()
export class CoffeesService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createCoffeeDto: CreateCoffeeDto) {
    return await this.prisma.coffee
      .create({
        data: {
          name: createCoffeeDto.name,
          brand: createCoffeeDto.brand,
          flavors: {
            create: createCoffeeDto.flavors.map((flavor) => ({
              assignedBy: 'paopao',
              flavor: {
                connect: { name: flavor },
              },
            })),
          },
        },
        select: {
          id: true,
        },
      })
      .then((res) => res)
      .catch((error) => {
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code === 'P2002') {
            throw new ForbiddenException(
              `${createCoffeeDto.name} should be unique`,
            );
          }
        }
        throw error;
      });
  }

  async findAll(paginationQuery: PaginationQueryDto) {
    const { page, size } = paginationQuery;
    return await this.prisma.coffee.findMany({
      include: {
        flavors: {
          select: {
            flavor: true,
          },
        },
      },
      skip: (page - 1) * size,
      take: size,
    });
  }

  async findOne(id: number) {
    const coffee = await this.prisma.coffee.findUnique({
      where: { id },
    });
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  async update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    await this.findOne(id);
    return this.prisma.coffee.update({
      where: {
        id,
      },
      data: updateCoffeeDto,
      select: {
        id: true,
      },
    });
  }

  async remove(id: number): Promise<{ id: number }> {
    await this.findOne(id);
    return this.prisma.coffee.delete({
      where: { id },
      select: { id: true },
    });
  }
}