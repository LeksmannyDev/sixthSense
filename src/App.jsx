import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { ScrollTop, PageTransitionWrapper } from "./ScrollTop";
import Home from "./components/pages/Home";
import WhoWeAre from "./components/pages/WhoWeAre";
import Contact from "./components/pages/Contact";
import WhatWeDo from "./components/pages/WhatWeDo";
import Blogs from "./components/pages/Blogs";
import EventsTlc from "./components/pages/EventsTlc";
import Faculty from "./components/pages/Faculty";
import Mp3 from "./components/pages/Mp3";
import Lmc from "./components/pages/Lmc";

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
            path="/our-faculty"
            element={
              <Layout>
                <PageTransitionWrapper>
                  <Faculty />
                </PageTransitionWrapper>
              </Layout>
            }
          />
          <Route
            path="/events/tlc"
            element={
              <Layout>
                <PageTransitionWrapper>
                  <EventsTlc />
                </PageTransitionWrapper>
              </Layout>
            }
          />
          <Route
            path="/events/mp3"
            element={
              <Layout>
                <PageTransitionWrapper>
                  <Mp3 />
                </PageTransitionWrapper>
              </Layout>
            }
          />
          <Route
            path="/events/lmc"
            element={
              <Layout>
                <PageTransitionWrapper>
                  <Lmc />
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
