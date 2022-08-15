// App.js
// Kindacode.com
import { useEffect, useState } from "react";

const App = () => {
  const [title, setTitle] = useState("Default Title");

  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    document.title = title;
  }, [title]);

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        onChange={changeTitle}
        value={title}
        style={styles.input}
      />
    </div>
  );
};

export default App;

// Just some styles
const styles = {
  container: {
    width: 500,
    margin: "50px auto",
    display: "flex",
    justifyContent: "center",
  },
  input: {
    width: 300,
    padding: "5px 20px",
  },
};
