import { DynamicModule, Global, Module, Provider  } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Global()
@Module({})
export class PrismaModule {
    static register(): DynamicModule {
        const prisma = new PrismaClient();
        
        const Prisma: Provider = {
            provide: 'PrismaInit',
            useValue: prisma,
        }

        return {
            module: PrismaModule,
            providers: [Prisma],
            exports:[Prisma],
        }
    }
}
