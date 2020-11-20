import { Injectable, Logger } from '@nestjs/common';
import { UserRoleSeederService } from './services/user-role-seeder.service';

@Injectable()
export class Seeder {
  constructor(
    private readonly logger: Logger,
    private readonly userRoleServiceSeeder: UserRoleSeederService,
  ) {}
  async seed() {
    await this.user_roles()
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
}
