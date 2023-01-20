import { useState, useEffect } from "react";

function App() {
  const [showing, setShowing] = useState(false);
  return (
    <div>
      <button>{showing ? "Hide" : "Showing"}</button>
    </div>
  );
}

export default App;
