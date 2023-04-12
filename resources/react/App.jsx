import React from "react";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import "./App.css";
import { Router } from "./router";
import {store} from "./store";
// import { persistor, store } from "./Store";

export const App = () => {
    return (
        <Provider store={store}>
            {/* <Provider> */}
            {/* <PersistGate loading={null} persistor={persistor}> */}

            <Router />

            {/* </PersistGate> */}
            {/* </Provider> */}
        </Provider>
    );
};

export default App;
