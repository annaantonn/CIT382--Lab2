import "./styles.css";
const expressions = ["amazing!", "anti-gravity?", "streamlined!"];

// Place above App() function
function formatName(user) {
  return user.firstName + " " + user.lastName;
}

function getGreeting(user) {
  return "Hello," + " " + user.firstName + " " + user.lastName + "!";
}
export default function App() {
  // Add above return statement within App() function
  const user = {
    firstName: "Anna",
    lastName: "Anton"
  };

  const element = <h2>Hello, {formatName(user)}!</h2>;
  return (
    <div className="App">
      <h1>Lab 2</h1>
      {element}
      {/* getGreeting(user) */}
      <br />
      <img src="golden-ret.jpg" alt="Golden" />
      {expressions.map((expression) => (
        <div>{expression}</div>
      ))}
      {/* <div>Whew, this lab is done!</div> */}
    </div>
  );
}
