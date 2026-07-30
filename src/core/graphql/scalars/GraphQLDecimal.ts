import { GraphQLScalarType, Kind, ValueNode } from 'graphql';

import { Prisma } from '@prisma';

export const GraphQLDecimal = new GraphQLScalarType<Prisma.Decimal, number>({
  name: 'Decimal',
  description: 'Decimal value as a number',
  serialize: (value: unknown): number => {
    if (!(value instanceof Prisma.Decimal)) {
      throw new Error('Value needs to be a Prisma.Decimal');
    }
    return value.toNumber();
  },
  parseValue: (value: unknown): Prisma.Decimal => {
    if (typeof value !== 'number') {
      throw new Error('Value needs to be a number');
    }
    return new Prisma.Decimal(value);
  },
  parseLiteral: (ast: ValueNode): Prisma.Decimal => {
    if (ast.kind !== Kind.INT && ast.kind !== Kind.FLOAT) {
      throw new Error('Value needs to be a number');
    }
    return new Prisma.Decimal(ast.value);
  },
});
