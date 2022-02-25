import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { GlobalStyle } from "./styles/globalStyle";

ReactDOM.render(
  <StrictMode>
    <App />
    <GlobalStyle />
  </StrictMode>,
  document.getElementById("root")
);
