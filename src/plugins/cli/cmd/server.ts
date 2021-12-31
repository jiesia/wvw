import type Application from 'src/app';

export default (app: Application) => ({
  name: 'server',
  command: 'server',
  options: ['-p, --port', 'server port'],
  description: 'Create a local server',
  action: async () => {
    await app.builder.build(true);
  },
});
