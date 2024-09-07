import { Injectable } from '@nestjs/common'
import TwinBcrypt from 'twin-bcrypt';
import { config } from '../common/config'

@Injectable()
export class PasswordService {
  get bcryptSaltRounds(): string | number {
    const saltOrRounds = config.security.bcryptSaltOrRound

    return Number.isInteger(Number(saltOrRounds))
      ? Number(saltOrRounds)
      : saltOrRounds
  }

  validatePassword(password: string, hashedPassword: string): Promise<boolean> {
    return TwinBcrypt.compare(password, hashedPassword, null, function(result) {
      return result;
    });
  }


  hashPassword(password: string): Promise<string> {
    return TwinBcrypt.hash(password, this.bcryptSaltRounds, function(hash) {
      return hash;
    })
  }
}
