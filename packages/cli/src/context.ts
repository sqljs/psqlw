import { Readable, Writable } from 'stream';

export type Context = {
  cwd: string;
  stdin: Readable;
  stdout: Writable;
  stderr: Writable;
};
