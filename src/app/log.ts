import { color } from '../utils';

class Log {

  @color('blue')
  info(msg: string) {}

  @color('green')
  success(msg: string) {}

  @color('yellow')
  warn(msg: string) {}
  
  @color('red')
  error(msg: string) {}
}

export default Log;
