import React from 'react'
import {BrowserRouter as Router} from "react-router-dom"
import {Navbar} from "./components/Navbar/Navbar"
import {useRoutes} from './routes'


function App() {
    const routes = useRoutes(false)




    return (
        <Router>
            <div className="app">
                <Navbar/>
                {routes}
            </div>
        </Router>
    );
}

export default App;
