import SignUp from "./Components/Signup"
import Home from "./Components/Home"
import Login from "./Components/Login"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Card from "./Components/Cards"
import Routes from "../src/Components/Routes"
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom"

 function Home() {
    return (
        <Router>
        <h1>Home</h1>
        </Router>
    )
}

export default Home;