import path from 'path';
import Application from 'src/app';

export default function injectCLIPlugin(app: Application) {
  const { cli } = app;
  // built-in plugins
  const builtInCLIPluginDir = path.resolve(__dirname, 'cmd');
  const builtInCLIPlugins = app.loader.loadCommands(builtInCLIPluginDir);
  cli.register(builtInCLIPlugins);
}
