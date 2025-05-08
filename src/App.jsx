import React, { useState, useEffect } from "react";
import Compass from "./component/compass/Compass";

const App = () => {
  const [degree, setDegree] = useState(0);

  return (
    <div>
      
      <input
        type="number"
        value={degree}
        onChange={(e) => setDegree(Number(e.target.value))}
      />
      <p />
      <Compass degree={degree} />
    </div>
  );
};

export default App;