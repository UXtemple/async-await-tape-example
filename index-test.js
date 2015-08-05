import { doSomethingAsync, throwSomethingAsync } from './index';
import test from 'tape';

test('#doSomethingAsync', async t => {
  t.equal(await doSomethingAsync(), 'async!');
  t.end();
});

test('#throwSomethingAsync', async t => {
  try {
    await throwSomethingAsync();
  } catch(err) {
    t.equal(err.message, 'boom');
  }
  t.end();
});
