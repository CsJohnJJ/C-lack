import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from "./App";
// import ChatRoom from "./channel/ChatRoom"


const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App />
      {/* <ChatRoom /> */}
    </HashRouter>
  </Provider>
);

export default Root;
