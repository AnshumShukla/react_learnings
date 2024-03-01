
import Todo from "./App-name"
import List from "./List"
import College from "./college"
import "./index.css"
function App() {
  const todoitems = [
    {
      todoname: "milk",
      tododate: "08/10/2004"
    },
    {
      todoname: " go to college",
      tododate: "08/10/2004"
    }
  ]
  return (
    <>
      <center >
        <Todo />
        <List />
        <College todoitems={todoitems} />
        {/* <College/>  */}
      </center>
    </>
  );
}
export default App
