// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
import HttpClient from "util/httpClient";
import { API_URL } from "defaults/constants";
import { server } from "mocks/server";

// Enable API mocking before tests.
beforeAll(() => {
  HttpClient.create(API_URL);
  server.listen();
});

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());
