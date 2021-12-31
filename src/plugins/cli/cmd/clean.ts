import type Application from "src/app";

export default (app: Application) => ({
  name: 'clean',
  command: 'clean',
  description: 'Clean the cache files',
  action: () => {
    console.log('clean command');
  },
});
