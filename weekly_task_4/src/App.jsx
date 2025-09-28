import React from "react";
import ProfileClass from "./components/ProfileClass"; // ✅ path benar
import ProfileFunctional from "./components/ProfileFunctional"; // ✅ path benar

function App() {
  return (
    <div>
      <h1>Belajar React Component</h1>

      {/* Kirim PROPS ke Class Component */}
      <ProfileClass
        name="Erik Nofra Rama"
        job="Programmer"
        email="erik@gmail.com"
      />

      {/* Kirim PROPS ke Functional Component */}
      <ProfileFunctional
        name="Prabowo Subianto"
        job="Presiden RI"
        email="prabowo@gmail.com"
      />
    </div>
  );
}

export default App;
