import type Application from 'src/app';

export default (app: Application) => ({
  name: 'deploy',
  command: 'deploy',
  options: ['-g, --generate', 'Generate the final files before deploy'],
  description: 'Deploy your website',
  action: () => {
    console.log('deploy command');
  },
});
