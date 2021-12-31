import colors, { Color } from 'colors';
import glob from 'glob';

export function color(color: keyof Color) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.value = function(msg: string) {
      const tip = propertyKey.toUpperCase();
      msg = colors[color](`${tip}: ${msg}`);
      console.log(msg);
    }
  }
}

export function find(pattern: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    glob(pattern, (error, files) => {
      if (error) return reject(error);
      else resolve(files);
    });
  });
}
