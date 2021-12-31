import CLI from './cli';
import Log from './log';
import Loader from './loader';
import Server from './server';
import Builder from './builder';
import injectCLIPlugin from '../plugins/cli';
import { resolve } from 'path';
import { program } from 'commander';

class Application {
  sourceDir: string = 'source';
  publicDir: string = 'public';
  themeDir: string = 'theme';
  log = new Log();
  loader = new Loader(this);
  cli = new CLI(this);
  builder = new Builder(this);
  server = new Server();

  constructor(public cwd: string, public args: string[]) {
    this.sourceDir = resolve(cwd, this.sourceDir);
    this.publicDir = resolve(cwd, this.publicDir);
    this.themeDir = resolve(cwd, this.themeDir);
  }

  run() {
    // inject built-in and user's plugins
    injectCLIPlugin(this);

    // parse command
    this.parse();
  }

  parse() {
    const { version } = require('../../package.json');
    program.version(version);
    // parse commands of cli
    const { commands } = this.cli;
    Object.keys(commands).forEach(name => {
      const { command, description, options, action } = commands[name];
      if (options) {
        program
        .command(command)
        .description(description)
        .option(...options)
        .action(action);
      } else {
        program
        .command(command)
        .description(description)
        .action(action);
      }
    });
    program.parse(this.args);
  }
}

export default Application;
