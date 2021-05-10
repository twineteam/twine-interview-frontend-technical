import React from "react";

import logo from "./assets/twine-logo.png";
import Requirements from "./components/Requirements";

// import HRIS from "./answers/HRIS";

const App = () => {
  return (
    <div style={{ maxWidth: 1200, margin: "auto", height: "100%", padding: 64 }}>
      <img src={logo} style={{ width: 64, height: "auto" }} alt="twine-awesome-logo" />
      <h1>Twine Frontend technical test</h1>

      <section style={{ padding: 24, backgroundColor: "ghostwhite", marginBottom: 64 }}>
        <h1>Answers</h1>

        <h3 style={{ border: "1px solid blue" }}>My awesome component</h3>
      </section>

      <div style={{ height: "1px", backgroundColor: "lightgrey", marginBottom: 24 }} />
      <section>
        <Requirements />
      </section>
    </div>
  );
};

export default App;
