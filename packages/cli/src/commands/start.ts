import { Command } from 'clipanion';
import { Context } from '../context';

export class PsqlwStart extends Command<Context> {
  @Command.Boolean(`--public`)
  public public: boolean = false;

  @Command.Path(`start`)
  @Command.Path()
  async execute() {
    throw new Error('TODO');
    // this.context.stdout.write(`TODO: ${this.context.cwd}\n`);
  }
}
