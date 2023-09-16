import { QueryClientProvider } from "@tanstack/react-query";
import Tickets from "../../components/Layout/Main/Tickets";
import PageTransition from "../../components/Layout/PageTransition";
import { getAllSchedules } from "../../db/movies";
import { QueryClient } from "@tanstack/react-query";
const client = new QueryClient();
function TicketsPage({ data }) {
  if (!data.schedule) {
    return <></>;
  }
  //console.log(data.schedule);
  let movie = {};
  try {
    data.schedule = JSON.parse(data.schedule);
    data.schedule = { ...data.schedule, date: new Date(data.schedule.date) };
  } catch {}
  return (
    <PageTransition>
      <QueryClientProvider client={client}>
        <Tickets schedule={data.schedule} />
      </QueryClientProvider>
    </PageTransition>
  );
}
// export async function getStaticPaths() {
//   const schedule = await getAllSchedules();
//   return {
//     fallback: true,
//     paths: schedule.map((s) => ({
//       params: { scheduleID: s.id },
//     })),
//   };
// }
export async function getServerSideProps(context) {
  const schedule = await getAllSchedules();
  const filteredSchedule = JSON.stringify(
    schedule.filter((s) => s.id === context.params.scheduleID)[0]
  );
  return {
    props: { data: { schedule: filteredSchedule } },
    //revalidate: 60,
  };
}
export default TicketsPage;
export const queryClient = client;
