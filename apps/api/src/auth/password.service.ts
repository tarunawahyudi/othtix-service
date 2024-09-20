import { Injectable, Logger } from '@nestjs/common'
import * as TwinBcrypt from 'twin-bcrypt';

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

    return new Promise((resolve, reject) => {
      TwinBcrypt.compare(password, hashedPassword, null, function(hash: any) {
        if (hash) resolve(hash);
        else reject();
      });
    })
  }

  hashPassword(password: string): Promise<string> {
    Logger.log(TwinBcrypt);
    return new Promise((resolve, reject) => {
      TwinBcrypt.hash(password, this.bcryptSaltRounds, function(hash: string | PromiseLike<string>) {
        if (hash) resolve(hash);
        else reject();
      })
    })
  }
}
