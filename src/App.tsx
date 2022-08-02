import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToogleDiv from "./components/ToogleDiv";
import FormsInType from "./components/FormsInType";
import CustomHookExample from "./components/CustomHookExample";
import { LifecycleMethod, Information ,LifecycleMethodWithFunction} from "./components/LifeCycleMethods";
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ToogleDiv/>
      <FormsInType/>
      <LifecycleMethod initialValue={0} />
      <Information />
      <LifecycleMethodWithFunction initialValue={0} />
      <CustomHookExample/>
      </header>
    </div>
  );
}

export default App;
