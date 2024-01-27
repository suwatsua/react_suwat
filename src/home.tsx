import React from "react";
import Welcome from "./Welcome";
import Counter from "./Counter";
function Home() {
  return (
    <div>
      <div>Hello World! Home</div>
      <Welcome name="John" />
      <Welcome name="champ" />
      <Welcome name="peter" />
      <Counter />
    </div>
  );
}
export default Home;
