import inquirer from 'inquirer';
import { resolve } from 'path';
import { copy } from 'fs-extra';
import type Application from 'src/app';

async function createProject(folder: string, app: Application) {
  const scaffoldPath = resolve(__dirname, '../../../../scaffold');
  const projectPath = resolve(app.cwd, folder);
  // create begining
  const start = Date.now();
  app.log.info(`Creating project to ${projectPath} ...`);
  await copy(scaffoldPath, projectPath);
  const end = Date.now();
  app.log.success(`Takes ${end - start}ms to complete`);
}

async function confirm(folder: string) {
  const { ok } = await inquirer.prompt({
    name: 'ok',
    type: 'confirm',
    message: `Are you sure you want to create a project with the name ${folder}?`,
    default: true,
  });
  return ok;
}

async function prompt() {
  const { folder } = await inquirer.prompt({
    name: 'folder',
    type: 'input',
    message: 'Please enter the name of the project you want to create: ',
    default: 'Blog',
  });
  return folder;
}

export default (app: Application) => ({
  name: 'init',
  command: 'init [folder]',
  description: 'Create a new project',
  action: async (folder: string) => {
    if (!folder) {
      folder = await prompt();
      createProject(folder, app);
    } else {
      const res = await confirm(folder);
      if (res) createProject(folder, app);
    }
  },
});
