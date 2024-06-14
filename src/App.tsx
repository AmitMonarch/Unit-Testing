//import React, { useState } from "react";
import "./App.css";
// import { Button, Counter, Application, Greet, Skills } from "./modals/index";
import { AppProviders } from "./providers/app-providers";
import { MuiMode } from "./components/mui/mui-mode";
import { CounterTwo } from "./components/counter-two/Counter-two";

function App() {
  // const [label, setLabel] = useState("Label 1");
  // const [flag, setFlag] = useState(false);
  // const skills = ["Html", "CSS", "Javascript"];

  // const handleClick = (): void => {
  //   setFlag(!flag);
  //   if (flag) {
  //     setLabel("Label 2");
  //     return;
  //   }
  //   setLabel("Label 1");
  // };

  return (
    // <AppProviders>
    //   <div className="App">
    //     <MuiMode />
    //   </div>
    // </AppProviders>
    <>
      <CounterTwo count={0} />
    </>
  );
}

export default App;
