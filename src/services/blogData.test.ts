import { fetchBlogPosts } from './blogData';

describe('fetchBlogPosts()', () => {
  let res: Array<object>;
  beforeAll(async () => {
    res = await fetchBlogPosts();
  });

  test('it returns an array', async () => {
    expect(Array.isArray(res)).toBeTruthy();
  });

  test("the array isn't empty", async () => {
    expect(res.length > 0).toBeTruthy();
  });

  test('the first array item is an object', async () => {
    const first = res[0];
    expect(
      typeof first === 'object' && Array.isArray(first) === false
    ).toBeTruthy();
  });
});
