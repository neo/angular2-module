import { Injectable, Optional } from '@angular/core';

@Injectable()
export class UserServiceConfig {
  userName: string;
}
/** Dummy version of an authenticated user service */
export class UserService {
  constructor(@Optional() config: UserServiceConfig) {
    if (config) { this.userName = config.userName; }
  }
  userName = 'Sherlock Holmes';
}
