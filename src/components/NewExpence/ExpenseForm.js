import "./ExpenseForm.css";
function ExpenseForm() {
  const titleChangeHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <form>
      <div className="new-expence__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="Date" min="2019-01-01" max="2023-06-01" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expence</button>
      </div>
    </form>
  );
}
export default ExpenseForm;