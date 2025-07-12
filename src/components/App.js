import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import hogs from "../porkers_data";

function App() {
  const [showGreased, setShowGreased] = useState(false);
  const [sortBy, setSortBy] = useState("none");

  const hogsToDisplay = showGreased
    ? hogs.filter((hog) => hog.greased)
    : hogs;

  const sortedHogs = [...hogsToDisplay];
  if (sortBy === "name") {
    sortedHogs.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "weight") {
    sortedHogs.sort((a, b) => a.weight - b.weight);
  }

  return (
    <div className="App">
      <Nav />

      <label>
        <input
          type="checkbox"
          checked={showGreased}
          onChange={() => setShowGreased(!showGreased)}
        />
        Show Greased Hogs Only
      </label>

      <label>
        Sort By:
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="none">None</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </label>

      <HogList hogs={sortedHogs} />
    </div>
  );
}

export default App;
