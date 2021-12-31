import { resolve } from 'path';
import Application from '.';

class Builder {
  constructor(private app: Application) {}

  /**
   * generate the final files
   * @param {Boolean} isDev server or generate
   */
  async build(isDev: boolean) {
    const targetDir = resolve(this.app.cwd, isDev ? '.app' : this.app.publicDir);
    // .md -> .app/*.html
    const { loader } = this.app;
    const mdFiles = await loader.loadMarkDown();
    console.log(mdFiles);
    // theme
    // static -> .app/

  }
}

export default Builder;
