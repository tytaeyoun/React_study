import "./styles.css";

function Greeter() {
    return <h1> Hello! This is a Greeter </h1>
  }

export default function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>hello what's up how u doing</p>
      <Greeter/>
    </div>
  );
}
