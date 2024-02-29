const College = ({ todoitems }) => {


  console.log(todoitems);

  return (
     <div>
      {todoitems && todoitems.map((item, index) => (
        <div key={index} className="row kg-row">
          <div className="col-4">{item.todoname}</div>
          <div className="col-4">{item.tododate}</div>
          <div class="col-2"><button type="button" class="btn btn-danger kg-bttn">delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}
export default College;