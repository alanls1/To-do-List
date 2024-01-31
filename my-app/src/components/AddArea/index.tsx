import { useState } from "react";
import * as C from "./styles";

type Props = {
  onEnter: (taskName: string) => void;
};

export const AddArea = ({ onEnter }: Props) => {
  const [inputText, setInputText] = useState("");

  function handleKeyUp(e: KeyboardEvent) {
    if (e.key == "Enter" && inputText !== "") {
      onEnter(inputText);
      setInputText("");
    }
  }

  return (
    <C.Container>
      <div className="image">+</div>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </C.Container>
  );
};
