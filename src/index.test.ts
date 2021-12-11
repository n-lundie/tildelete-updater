const sayHello = () => {
  return 'hello';
};

describe('index', () => {
  it('should say hello', () => {
    const res = sayHello();

    expect(res).toEqual('hello');
  });
});
