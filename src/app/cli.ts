import type { ICommand } from '../types';
import type Application from '.';

class CLI {
  commands: Record<string, ICommand> = {};

  constructor(public app: Application) {}

  register(commands: ICommand | ICommand[]) {
    commands = Array.isArray(commands) ? commands : [commands];

    for (let i = 0; i < commands.length; i++) {
      const command = commands[i];
      const { name } = command;
      // command name cann't already exists
      if (this.commands[name]) {
        const { log } = this.app;
        log.error(`Command ${name} already exists.`);
        process.exit(1);
      }
      this.commands[name] = command;
    }

    return this;
  }
}

export default CLI;
