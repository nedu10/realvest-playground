import { Injectable, Logger } from '@nestjs/common';
import { UserRoleSeederService } from './services/user-role-seeder.service';
import { UserSeederService } from './services/user-seeder.service';

@Injectable()
export class Seeder {
  constructor(
    private readonly logger: Logger,
    private readonly userRoleServiceSeeder: UserRoleSeederService,
    private readonly userServiceSeeder: UserSeederService,
  ) {}
  async seed() {
    await this.user_roles()
      .then((completed) => {
        this.logger.debug('Successfuly completed seeding user roles...');
        Promise.resolve(completed);
      })
      .catch((error) => {
        this.logger.error('Failed seeding user roles...');
        Promise.reject(error);
      });
    await this.users()
      .then((completed) => {
        this.logger.debug('Successfuly completed seeding users...');
        Promise.resolve(completed);
      })
      .catch((error) => {
        this.logger.error('Failed seeding users...');
        Promise.reject(error);
      });
  }
  async user_roles() {
    return await Promise.all(this.userRoleServiceSeeder.create())
      .then((createdUserRole) => {
        // Can also use this.logger.verbose('...');
        this.logger.debug(
          'No. of user role created : ' +
            // Remove all null values and return only created languages.
            createdUserRole.filter(
              (nullValueOrCreatedUserRole) => nullValueOrCreatedUserRole,
            ).length,
        );
        return Promise.resolve(true);
      })
      .catch((error) => Promise.reject(error));
  }
  async users() {
    return await Promise.all(this.userServiceSeeder.create())
      .then((createdUser) => {
        // Can also use this.logger.verbose('...');
        this.logger.debug(
          'No. of user created : ' +
            // Remove all null values and return only created languages.
            createdUser.filter(
              (nullValueOrCreatedUser) => nullValueOrCreatedUser,
            ).length,
        );
        return Promise.resolve(true);
      })
      .catch((error) => Promise.reject(error));
  }
}
