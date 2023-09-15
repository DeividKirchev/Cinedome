import ScheduleTable from "../Schedule/ScheduleTable";
import classes from "./Schedule.module.css";
function Schedule({ data, showMissing = true }) {
  const { movies, schedule } = data;
  // console.log(movies);
  // console.log(schedule);

  const now = new Date();
  const nextWeek = new Date(new Date().setDate(now.getDate() + 7));
  const filteredSchedule = schedule.filter((s) => {
    const newDate = new Date(s.date);
    return newDate >= now && newDate <= nextWeek;
  });
  //console.log(filteredSchedule);
  const result = {};
  for (let i = 0; i < 7; i++) {
    const currentDateStr = now.toISOString().slice(0, 10); // Get the date in 'YYYY-MM-DD' format
    result[currentDateStr] = filteredSchedule
      .filter((item) => {
        //console.log(item.date);
        return (
          new Date(item.date).toISOString().slice(0, 10) === currentDateStr
        );
      })
      .map((s) => ({
        schedule: s,
        movie: movies.filter((m) => m.id === s.movieID)[0],
      }));

    now.setDate(now.getDate() + 1); // Move to the next day
    //console.log(result);
  }
  const fromTo = (
    <>
      <span>{Object.keys(result).at(0)}</span> -{" "}
      <span>{Object.keys(result).at(-1)}</span>
    </>
  );
  return (
    <div className="wrap">
      <h1 className={classes.h1}>Schedule for {fromTo}</h1>
      <ScheduleTable data={result} showMissing={showMissing} />
    </div>
  );
}

export default Schedule;
