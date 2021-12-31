import type Application from 'src/app';

export default (app: Application) => ({
  name: 'generate',
  command: 'generate',
  options: ['-d, --deploy', 'deploy your web site after generate'],
  description: 'Generate the final files',
  action: () => {
    console.log('generate command');
  },
});
