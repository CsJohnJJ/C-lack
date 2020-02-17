import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from "./components/root";

document.addEventListener('DOMContentLoaded', () => {
    // const store = configureStore();
    let store;
    if (window.currentUser) {
      const preloadedState = {
        entities: {
          users: { [window.currentUser.id]: window.currentUser }
        },
        session: { id: window.currentUser.id }
      };
      store = configureStore(preloadedState);
      window.getState = store.getState;
      window.dispatch = store.dispatch;
        delete window.currentUser;
      } else {
        store = configureStore();
      }

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});

