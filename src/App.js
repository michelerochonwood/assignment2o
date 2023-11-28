// shared components
import Header from "./views/shared/Header";
import Footer from "./views/shared/Footer";

// page components
import Home from "./views/Home";
import Contact from "./views/Contact";
import Portfolio from "./views/Portfolio";
import References from "./views/References";
import Post from "./views/Post";
import AddReference from "./AddReference";

// dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useContext, useState } from "react"; // for sharing state between components

// global Context (like a global or session var container) - I'm not using the counter but I'm keeping it in case I want to add it later)
export const CounterContext = createContext();

function App() {
  // set state variable for a session click count
  const [sessionCounter, setSessionCounter] = useState(0);

  // public function to increment the session var; available to any child component
  const handleIncrement = () => setSessionCounter(sessionCounter + 1);  

  return (
    <div>
      {/* wrap all components in the context so it can be shared among all */}
      <CounterContext.Provider value={{ sessionCounter, handleIncrement }}>
        {/* jsx comment style */}
        <Header username='mrochon' />
        <main>
          {/* use classes from react-router-dom to set up the url mapping for each page */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home username='mrochon' displayName='Michele' />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/references" element={<References />} />
              <Route path="/post/:id" element={<Post />} />
              <Route path="/addreference/" element={<AddReference username='mrochon'/>} />
            </Routes>
          </BrowserRouter>
        </main>
        <Footer />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
