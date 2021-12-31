import type Application from 'src/app';

export default (app: Application) => ({
  name: 'new',
  command: 'new [title] <path>',
  description: 'Create a new article',
  options: ['-f, --force', 'replace the old file weather it exists'],
  action: () => {
    console.log('init command');
  },
});
