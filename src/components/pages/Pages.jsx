import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
import FaqPage from "../FAQ/FaqPage"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import SignUpEnter from "../Enterprise/SignUpEnter"
import Email from "../Email/Email"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/product' component={Services} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/faq' component={FaqPage} />  
          <Route exact path='/Form' component={SignUpEnter} />
          <Route exact path='/Email' component={Email} />

        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
