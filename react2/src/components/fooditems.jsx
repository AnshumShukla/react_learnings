const Fooditems = () => {
    let fooditems =['dal','mango', 'apple','kiwi' ]
  return <>
    <ul className="list-group">
    {Fooditems.map( (item) =>  (<li key={item} class="list-group-item"> {item} </li> )) }
  </ul>
  </>
};
 export default Fooditems;