import React from "react";
import Card from "./components/Card"
import "./App.css"

function App() {
 
  return (
    <main>
      <div className={`outer-container`}>
        <div className="inner-container">
          <Card/>
        </div>
      </div>
    </main>
  );
}

export default App;