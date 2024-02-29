import Fooditems from './components/fooditems';
import './App.css' 

function App() {
  let fooditems =['dal','mango', 'apple','kiwi' ]

  return  <>
  <h1>Healthy food</h1>
  <ul className="list-group">
    {Fooditems.map( (item) =>  (<li key={item} class="list-group-item"> {item} </li> )) }
  </ul>
  </>
  
 
  
  
}

export default App
