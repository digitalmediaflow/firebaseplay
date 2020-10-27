
import React from "react";
import Footer from "../Home/Footer/Footer"
import Header from '../Home/Header/Header'
import Body from "../Home/Body/Body"

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
        <>
    <Header/>
    <Body/>
    <Footer/>
        </>
    )
}

export default Home;