import "./styles.css";
import { myClass } from "./MyClass";
import { myOtherAppClass } from "./OtherApp";

export default function App() {
  myClass.height = "123";
  console.log("from app", myClass);
  console.log(myClass === myOtherAppClass);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
