import { useState } from "react";
import Profile from "./components/Profile";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Profile
        lastName={"Doe"}
        firstName={"Jane"}
        age={45}
        hairColor={"Black"}
      />
      <Profile
        lastName={"Smith"}
        firstName={"John"}
        age={88}
        hairColor={"Brown"}
      />
    </div>
  );
}

export default App;
