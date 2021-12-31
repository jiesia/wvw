import Application from './app';

export default function(cwd: string, args: string[]) {
  const app = new Application(cwd, args);
  app.run();
}
