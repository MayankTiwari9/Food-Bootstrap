import { useState } from "react";
import Header from "./Components/Header"
import ItemCard from "./Components/ItemCard"
import ItemContainer from "./Components/ItemContainer"


function App() {

  const [displayCount, setDisplayCount] = useState(10); // Default to 10 or full length

  const handleInputChange = (value) => {
    setDisplayCount(value ? Number(value) : 10);
  };

  return (
    <div className="p-4">
    <Header onChange={handleInputChange} />
      <ItemContainer displayCount={displayCount} />
    </div>
  )
}

export default App
