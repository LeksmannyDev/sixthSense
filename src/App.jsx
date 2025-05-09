import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { ScrollTop, PageTransitionWrapper } from "./ScrollTop";
import Home from "./components/pages/Home";
import WhoWeAre from "./components/pages/WhoWeAre";
import Contact from "./components/pages/Contact";
import WhatWeDo from "./components/pages/WhatWeDo";
import Blogs from "./components/pages/Blogs";
import Events from "./components/pages/Events";

function App() {
  return (
    <Router>
      <ScrollTop />
      <PageTransitionWrapper>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <PageTransitionWrapper>
                  <Home />
                </PageTransitionWrapper>
              </Layout>
            }
          />
          <Route
            path="/who-we-are"
            element={
              <Layout>
                <PageTransitionWrapper>
                  <WhoWeAre />
                </PageTransitionWrapper>
              </Layout>
            }
          />
          <Route
            path="/blog"
            element={
              <Layout>
                <PageTransitionWrapper>
                  <Blogs />
                </PageTransitionWrapper>
              </Layout>
            }
          />
          <Route
            path="/what-we-do"
            element={
              <Layout>
                <PageTransitionWrapper>
                  <WhatWeDo />
                </PageTransitionWrapper>
              </Layout>
            }
          />
          <Route
            path="/events"
            element={
              <Layout>
                <PageTransitionWrapper>
                  <Events />
                </PageTransitionWrapper>
              </Layout>
            }
          />
          <Route
            path="/contact-us"
            element={
              <Layout>
                <PageTransitionWrapper>
                  <Contact />
                </PageTransitionWrapper>
              </Layout>
            }
          />
        </Routes>
      </PageTransitionWrapper>
    </Router>
  );
}

export default App;
