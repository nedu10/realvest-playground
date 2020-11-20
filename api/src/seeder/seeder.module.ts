import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from 'src/config/typeorm.config';
import { UserRoleModule } from 'src/user-role/user-role.module';
import { UserRoleRepository } from 'src/user-role/user-role.repository';
import { Seeder } from './seeder';
import { UserRoleSeederService } from './services/user-role-seeder.service';

/**
 * Import and provide seeder classes.
 *
 * @module
 */
@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    TypeOrmModule.forFeature([UserRoleRepository]),
    UserRoleModule,
  ],
  providers: [Logger, UserRoleSeederService, Seeder],
})
export class SeederModule {}
