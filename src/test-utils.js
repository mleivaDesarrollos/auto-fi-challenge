// test-utils.jsx
import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "redux/store";

function render(ui, { ...renderOptions } = {}) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
