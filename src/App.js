import React from "react";

import styles from "./App.module.scss";

function App() {

  return (
    <div className={styles.Root}>
      <div className={styles.Header}>
        <h2>Header</h2>
      </div>

      <div className={styles.Main}>
        <h2>Body</h2>
      </div>
    </div>
  );
}

export default App;
