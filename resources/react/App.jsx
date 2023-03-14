import React from "react";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import "./App.css";
import { Router } from "./router";
// import { persistor, store } from "./Store";

export const App = () => {
    return (
        <div>
        {/* <Provider> */}
             {/* <PersistGate loading={null} persistor={persistor}> */}
             
                 <Router />
                 
             {/* </PersistGate> */}
        {/* </Provider> */}
        </div>
    );
};

export default App;
