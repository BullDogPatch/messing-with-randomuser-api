import React, { useState, useEffect } from "react";
import "./styles.css";

function App() {
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState(null);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    fetch("https://api.randomuser.me/")
      .then(response => {
        return response.json();
      })
      .then(data => {
        const [item] = data.results;
        setPerson(item);
      });
  };

  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
      {person && (
        <p>
          Random Person is: {person.name.first} {person.name.last}
        </p>
      )}
      <button onClick={fetchUser}>get user</button>
    </div>
  );
}
export default App;
