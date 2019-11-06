import { Command } from 'clipanion';
import { Context } from '../context';

export class PsqlwDiscover extends Command<Context> {
  @Command.Path(`discover`)
  @Command.Path(`disco`)
  async execute() {
    throw new Error('TODO');
    // this.context.stdout.write(JSON.stringify(Object.keys(process), null, 2));
    // process.platform;
    // this.context.stdout.write(`Starting: ${process.platform}\n`);
  }
}
