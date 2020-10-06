import React from 'react'
import {BrowserRouter as Router} from "react-router-dom"
import {Navbar} from "./components/Navbar/Navbar"
import {useRoutes} from './routes'
import {useGetGallery} from "./hooks/gallery.hook"


function App() {
    const routes = useRoutes(false)
    // const [data,loading,error]=useGetGallery()

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
