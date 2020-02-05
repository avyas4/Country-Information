import React from "react";
import { Route, Switch } from "react-router-dom";
import { SearchComponent } from "./container/SearchComponent/SearchComponent";

class App extends React.Component<any> {
    public render(): JSX.Element {
        return (
            <Route
                path="*"
                render={({ location }) => (
                    <React.Fragment>
                        <Switch location={location}>
                            {/* Years Dashboard */}
                            <Route path="/" exact component={SearchComponent} />
                        </Switch>
                    </React.Fragment>
                )}
            />
        );
    }
}

export default App;
