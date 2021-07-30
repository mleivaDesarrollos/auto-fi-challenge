// We're using our own custom render function and not RTL's render.
// Our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, screen } from "./test-utils";
import App from "App";

// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 150ms
// when receiving a get request to the `/api/user` endpoint

test("simple testing", async () => {
  render(<App />);
  // after some time, the user should be received
  expect(screen.queryByText(/navigation/i)).not.toBeNull();
  expect(screen.getByText(/footer/i)).not.toBeNull();
});
