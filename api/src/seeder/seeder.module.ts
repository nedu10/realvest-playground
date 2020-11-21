import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from 'src/config/typeorm.config';
import { UserRoleModule } from 'src/user-role/user-role.module';
import { UserRoleRepository } from 'src/user-role/user-role.repository';
import { UserModule } from 'src/user/user.module';
import { UserRepository } from 'src/user/user.repository';
import { Seeder } from './seeder';
import { UserRoleSeederService } from './services/user-role-seeder.service';
import { UserSeederService } from './services/user-seeder.service';

/**
 * Import and provide seeder classes.
 *
 * @module
 */
@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    TypeOrmModule.forFeature([UserRoleRepository, UserRepository]),
    // UserRoleModule,
    // UserModule,
  ],
  providers: [Logger, UserRoleSeederService, Seeder, UserSeederService],
})
export class SeederModule {}
