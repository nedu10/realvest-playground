import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { UserRepository } from 'src/user/user.repository';
import * as config from 'config';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { UnauthorizedException } from '@nestjs/common';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET || config.get('jwt.secret'),
    });
  }

  async validate(payload: JwtPayload): Promise<object> {
    const { email } = payload;
    const get_user = await this.userRepository.findOne({ email });

    if (!get_user) {
      throw new UnauthorizedException();
    }
    return get_user;
  }
}
