import React from "react"
import {Switch, Route, Redirect} from "react-router-dom"
import {HomePage} from "./pages/HomePage";
import {PicturePage} from "./pages/PicturePage";

export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <HomePage/>
            </Route>
            <Route path="/picture">
                <PicturePage/>
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}