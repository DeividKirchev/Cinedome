import ScheduleTableItem from "./ScheduleTableItem";
import classes from "./ScheduleTable.module.css";
function ScheduleTable({ data }) {
  //console.log(data);
  const result = [];
  Object.keys(data).forEach(function (key, index) {
    result.push(
      <div key={key} className={classes.container}>
        <span className={classes.date}>{key}</span>
        {
          <ol className={classes.table}>
            {data[key].length > 0 &&
              data[key].map((item) => (
                <ScheduleTableItem key={item.schedule.id} item={item} />
              ))}
            {data[key].length === 0 && (
              <li className={classes.noMovies}>No running movies</li>
            )}
          </ol>
        }
      </div>
    );
  });
  return <div className={classes.padding}>{result}</div>;
}

export default ScheduleTable;
