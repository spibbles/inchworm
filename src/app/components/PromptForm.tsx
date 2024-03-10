import { useState } from "react";
import styles from "./promptform.module.css";

export default function PromptForm() {
  const [prompt, setPrompt] = useState("");

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label></label>
      <input
        className={styles.input}
        type="text"
        value={prompt}
        onChange={(e) => {
          setPrompt(e.target.value);
        }}
      />

      <input type="submit" />
    </form>
  );
}
