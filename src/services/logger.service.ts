import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { environment as ENV } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor(private logger: NGXLogger) {}

  log(msg: any, ...args: any[]) {
    if (ENV.production) {return;}
    this.logger.log(msg, ...args);
  }
  warn(msg: any, ...args: any[]) {
    if (ENV.production) {return;}
    this.logger.warn(msg, ...args);
  }
  error(msg: any, ...args: any[]) {
    if (ENV.production) {return;}
    this.logger.error(msg, ...args);
  }
  debug(msg: any, ...args: any[]) {
    if (ENV.production) {return;}
    this.logger.debug(msg, ...args);
  }
  info(msg: any, ...args: any[]) {
    if (ENV.production) {return;}
    this.logger.info(msg, ...args);
  }
  fatal(msg: any, ...args: any[]) {
    if (ENV.production) {return;}
    this.logger.fatal(msg, ...args);
  }
}
