import React, {useEffect} from "react";
import Landing from "./components/layout/Landing";
import Routes from "./components/routing/Routes";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import setAuthToken from "./utils/setAuthToken";
import store from "./store";
import {loadUser} from "./actions/auth";

const App = () => {
    useEffect(() => {
        setAuthToken(localStorage.token);
        store.dispatch(loadUser());
    }, []);

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Landing}/>
                    <Route component={Routes}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
};

export default App;