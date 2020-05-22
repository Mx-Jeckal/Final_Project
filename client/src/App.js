import React from "react";
import { Container } from "react-bootstrap";
import MyParallax from "./components/Parallax/MyParallax.js";
import Quote from "./pages/Quote/Quote.js";
import { GlobalStateProvider } from "./utils/GlobalState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.js";
import Gallery from "./pages/Gallery";
import About from "./components/About/About.js";
import Contact from "./components/Contact/Contact.js";
import Display from "./components/Alert/Alert.js";
import QuoteDetail from "./pages/Quote/QuoteDetails.js";
import Admin from "./pages/Admin/Admin";
import IsAuthenticatedRoute from "./components/Auth/isAuthenticatedRoute";
import NoMatch from "./pages/NoMatch/NoMatch.js";
import SignIn from "./pages/SignIn/SignIn.js";
import Footer from "./components/Footer/Footer.js";

function Home() {
  return (
    <Container fluid="xs" className="p-0">
      <MyParallax />
      <About />
      <Contact />
      <Footer />
    </Container>
  );
}

function App() {
  return (
    <GlobalStateProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/#about" component={About} />
          <Route path="/#contact" component={Contact} />
          <Route path="/quote" component={Quote} />
          <Route path="/thankyou" component={Display} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/login">
            <SignIn />
            <IsAuthenticatedRoute>
              <Route path="/admin">
                <Admin />
              </Route>
              <Route path="/admin/:id">
                <QuoteDetail />
              </Route>
            </IsAuthenticatedRoute>
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </GlobalStateProvider>
  );
}

export default App;
