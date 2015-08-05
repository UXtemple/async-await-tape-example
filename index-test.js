import { doSomethingAsync, throwSomethingAsync } from './index';
import test from 'tape';

test('#doSomethingAsync', async function(t) {
  try {
    t.equal(await doSomethingAsync(), 'async!');
  } catch(err) {
  }
  t.end();
});

test('#throwSomethingAsync', async function(t) {
  try {
    await throwSomethingAsync();
  } catch(err) {
    t.equal(err.message, 'boom');
  }
  t.end();
});
