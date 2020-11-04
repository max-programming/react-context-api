import { useContext } from "react";
import { MainContext } from "./context/MainContext";

function App() {
  const { people, setPeople } = useContext(MainContext);
  return (
    <div>
      {people.map((person) => (
        <div className="person">
          <h1>Name: {person.name}</h1>
          <h2>Age: {person.age}</h2>
          <h3>Is above 20? {person.aboveTwenty ? "Yes" : "No"}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
