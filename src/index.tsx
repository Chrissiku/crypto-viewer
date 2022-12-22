import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./App";
import AppContext from "./context/AppContext";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <AppContext>
        <Router>
          <App />
        </Router>
      </AppContext>
    </ChakraProvider>
  </React.StrictMode>
);

serviceWorker.unregister();

reportWebVitals();
