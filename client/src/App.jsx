import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [greeting, setGreeting] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/greeting?name=Nikita")
      .then((response) => {
        setGreeting(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!greeting) return "Loading...";

  return (
    <div>
      {/* Render other properties of the greeting object as needed */}
      <h1>{greeting.content}</h1>
    </div>
  );
}

export default App;
