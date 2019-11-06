import { Command } from 'clipanion';
import { Context } from '../context';
import { Client } from 'pg';

import { sqlListDatabases } from '@psqlw/introspection';

export class PsqlwList extends Command<Context> {
  @Command.String(`--conection,-d`)
  public database?: string;

  @Command.Path(`-l`)
  @Command.Path(`list`)
  async execute() {
    const client = new Client({ connectionString: this.database });
    await client.connect();
    const res = await client.query(sqlListDatabases);

    this.context.stdout.write(JSON.stringify(res.rows, null, 2));

    await client.end();
  }
}
