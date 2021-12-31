import fs from 'fs';
import path from 'path';
import { find } from '../utils';
import type Application from '.';
import type { ICommand } from '../types';

class Loader {
  constructor(private app: Application) {}

  /**
   * load markdown files
   * @returns [{name, directory}, {}, ...]
   */
  async loadMarkDown() {
    const { sourceDir } = this.app;
    const mdFiles = await find(`${sourceDir}/**/*.md`);
    return mdFiles.map(file => {
      const name = path.basename(file).split('.')[0];
      const directory = path.dirname(file);
      return { name, directory };
    });
  }

  /**
   * load theme
   */
  loadTheme() {

  }

  /**
   * load commands
   * @param directory commands are here
   * @returns {Array} [{command, action, description}, {}, ...];
   */
  loadCommands(directory: string) {
    const { log } = this.app;
    const isDirectory = fs.statSync(directory).isDirectory();
    // path is must existed and be a directory
    if (!isDirectory) {
      log.error('The path of commands direactory is not existed or a directory.');
      process.exit(1);
    }
    const commands: ICommand[] = [];
    fs.readdirSync(directory).forEach(file => {
      if (path.extname(file).match(/\.[jt]s$/)) {
        const filePath = path.resolve(directory, file);
        const command = require(filePath);
        const result = command.default || command;
        if (result instanceof Function) commands.push(result(this.app));
      }
    });
    return commands;
  }
}

export default Loader;
