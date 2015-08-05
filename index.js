export function doSomethingAsync() {
  return Promise.resolve().then(() => 'async!');
}

export function throwSomethingAsync() {
  return Promise.resolve().then(() => { throw new Error('boom') });
}
