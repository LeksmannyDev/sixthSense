import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { ScrollTop, PageTransitionWrapper } from "./ScrollTop";
import Home from "./components/pages/Home";
import WhoWeAre from "./components/pages/WhoWeAre";
import Contact from "./components/pages/Contact";
import WhatWeDo from "./components/pages/WhatWeDo";
import Blogs from "./components/pages/Blogs";
import Faculty from "./components/pages/Faculty";
import Mp3 from "./components/pages/Mp3";
import Lmc from "./components/pages/Lmc";
import Leadership from "./components/pages/Leadership";
import Training from "./components/pages/Training";
import Retreat from "./components/pages/Retreat";
import EventsTlm from "./components/pages/EventsTlm";

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
            path="/transformational-leadership"
            element={
              <Layout>
                <PageTransitionWrapper>
                  <EventsTlm />
                </PageTransitionWrapper>
              </Layout>
            }
          />
          <Route
            path="/mp3-masterclass"
            element={
              <Layout>
                <PageTransitionWrapper>
                  <Mp3 />
                </PageTransitionWrapper>
              </Layout>
            }
          />
          <Route
            path="/leadership-circle"
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
          <Route
            path="/services/leadership-development"
            element={
              <Layout>
                <PageTransitionWrapper>
                  <Leadership />
                </PageTransitionWrapper>
              </Layout>
            }
          />
          <Route
            path="/services/executive-training"
            element={
              <Layout>
                <PageTransitionWrapper>
                  <Training />
                </PageTransitionWrapper>
              </Layout>
            }
          />{" "}
          <Route
            path="/services/executive-retreat"
            element={
              <Layout>
                <PageTransitionWrapper>
                  <Retreat />
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
