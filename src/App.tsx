import * as React from "react"
import {
  ChakraProvider,
  theme
} from "@chakra-ui/react"

import { Routes } from "react-router-dom"
import { Route } from "react-router"
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./pages/About"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <Routes>
      <Route path="/~awan/" element={<Home />} />
      <Route path="/~awan/about" element={<About />} />
    </Routes>
    <Footer />


  </ChakraProvider>
)
