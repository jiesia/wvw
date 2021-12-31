export interface ICommand {
  name: string;
  command: string;
  description: string;
  options?: [string, string?, string?];
  action(...args: Array<string | number | boolean>): void;
}
