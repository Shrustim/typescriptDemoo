import React from 'react'
import { useLocalStorage } from "../customhook/useLocalStorage";
import { useToggle } from "../customhook/useToggle"
import { useDocumentTitle } from "../customhook/useDocumentTitle";
export default function CustomHookExample() {
    const [state, setState, remove] = useLocalStorage("key1", "value2");
    const [statee, setStatee, removee] = useLocalStorage("key2", "value2");
    const [stateee, setStateee, removeee] = useLocalStorage("key3", "value2");
    const [isToggle,onToggle,setIsToggle] = useToggle(true);
    useDocumentTitle("title by custom hook1");
    console.log("isToggle", isToggle);
  return (
    <div><br/>CustomHookExample
         Local storage value: {state} {stateee}
      <div>
        <button onClick={() => setState("update value1")}>
          Update storage value
        </button>
      </div><br/>
      useToggle hook
            <button onClick={() => onToggle()}>
               on Toggle
            </button>
          {isToggle ? <div style={{background:"yellow"}}>Hide or show this div</div> : null }
<br/><br/>
    </div>
  )
}
