import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {

  const [isDark, setIsDark] = useState(false)

    function handleLightSwitch() {
        setIsDark((isDark) => !isDark)
    }


  return (
    <div className={"App " + (isDark ? "dark" : "light")}>
      <Header isDark={isDark} onDarkModeClick = {handleLightSwitch} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
