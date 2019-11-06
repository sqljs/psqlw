import { Cli, Command } from 'clipanion';

// import yup from './yup';
import { Context } from './context';
import { PsqlwStart } from './commands/start';
import { PsqlwDiscover } from './commands/discover';
import { PsqlwList } from './commands/list';

const cli = new Cli<Context>({
  binaryLabel: `psqlw - PostgreSQL Web Interface`,
  binaryName: `psqlw`,
  binaryVersion: '0.1.0',
});

class PsqlwDefaultDefinitions extends Command<Context> {
  @Command.Path(`--clipanion=definitions`)
  async execute() {
    this.context.stdout.write(`${JSON.stringify(this.cli.definitions(), null, 2)}\n`);
  }
}

class PsqlwDefaultHelp extends Command<Context> {
  @Command.Path(`-h`)
  @Command.Path(`--help`)
  async execute() {
    this.context.stdout.write(this.cli.usage());
  }
}

cli.register(PsqlwDefaultDefinitions);
cli.register(PsqlwDefaultHelp);
cli.register(PsqlwStart);
cli.register(PsqlwDiscover);
cli.register(PsqlwList);

cli.runExit(process.argv.slice(2), {
  cwd: process.cwd(),
  stdin: process.stdin,
  stdout: process.stdout,
  stderr: process.stderr,
});
