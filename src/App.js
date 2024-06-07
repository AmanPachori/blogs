import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="bg-blue-500 text-white p-4">
          <h1 className="text-2xl">My Blog</h1>
        </header>
        <main className="p-4">
          <Routes>
            <Route path="/blog/:title" component={BlogPost} />
            {/* Add other routes here */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
