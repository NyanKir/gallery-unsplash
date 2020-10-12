import React from "react"
import {Switch, Route, Redirect} from "react-router-dom"
import {HomePage} from "./pages/HomePage"
import {HistoryPage} from "./pages/HistoryPage"
import {FollowsPage} from "./pages/FollowsPage";

export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <HomePage/>
            </Route>
            <Route path="/source/:text">
                <HomePage/>
            </Route>
            <Route path="/history">
                <HistoryPage/>
            </Route>
            <Route path="/follows">
                <FollowsPage/>
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}