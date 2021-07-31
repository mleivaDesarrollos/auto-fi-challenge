import { rest } from "msw";
// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 150ms
// when receiving a get request to the `/api/user` endpoint
export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/posts", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          userId: 1,
          id: 1,
          title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        },
      ]),
      ctx.delay(50)
    );
  }),
  rest.get("https://jsonplaceholder.typicode.com/comments", (req, res, ctx) => {
    const postId = Number.parseInt(req.url.searchParams.get("postId"), 10);
    return res(
      ctx.json([
        {
          postId: postId,
          id: 1,
          name: "id labore ex et quam laborum",
          email: "Eliseo@gardner.biz",
          body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
        },
      ]),
      ctx.delay(50)
    );
  }),
];
