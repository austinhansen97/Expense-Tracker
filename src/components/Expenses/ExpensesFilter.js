import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  //
  //   const [original, newOriginal] = useState("");

  const dropDownHandler = (event) => {
    props.onDropDown(event.target.value);
  };

  //   function yearSelected() {
  //     console.log(original);
  //   }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.defaultYear} onChange={dropDownHandler}>
          <option value="2022" type="submit">
            2022
          </option>
          <option value="2021" type="submit">
            2021
          </option>
          <option value="2020" type="submit">
            2020
          </option>
          <option value="2019" type="submit">
            2019
          </option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
