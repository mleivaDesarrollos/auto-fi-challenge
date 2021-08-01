// We're using our own custom render function and not RTL's render.
// Our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
// import { render, fireEvent, screen } from "./test-utils";
import { render, screen, waitFor, fireEvent } from "./test-utils";
import App from "./App";

test("checks if the footer and the navigation are loaded", async () => {
  render(<App />);
  expect(screen.getByPlaceholderText(/search post title/i)).toBeInTheDocument();
  expect(screen.getByText(/footer/i)).toBeInTheDocument();
});

test("checks if the post is loaded", async () => {
  render(<App />);
  const postBody = await waitFor(() => screen.findAllByText(/sunt/i));
  expect(postBody).toBeTruthy();
});
test("when clicking post comment button expects to find that comment", async () => {
  render(<App />);
  const buttonComment = await waitFor(() => screen.findByRole(/button/i));
  fireEvent.click(buttonComment);
  const commentLoaded = await waitFor(() =>
    screen.getByText(/Eliseo@gardner.biz/i)
  );
  expect(commentLoaded).toBeInTheDocument();
});
