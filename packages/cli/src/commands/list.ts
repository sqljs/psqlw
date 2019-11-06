import { Command } from 'clipanion';
import { Context } from '../context';
import { Client } from 'pg';

const sqlListDatabases = `
SELECT d.datname as "Name",
   pg_catalog.pg_get_userbyid(d.datdba) as "Owner",
   pg_catalog.pg_encoding_to_char(d.encoding) as "Encoding",
   d.datcollate as "Collate",
   d.datctype as "Ctype",
   pg_catalog.array_to_string(d.datacl, E'\n') AS "Access privileges"
FROM pg_catalog.pg_database d
ORDER BY 1;
`;

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
