import SearchBox from "./component/SearchBox";
import JobCard from "./component/job/JobCard";
import styles from "./page.module.css";
import dummyData from "./component/job/dummyData";
export default function Home() {
  return (
    <main>
      <SearchBox />
      {dummyData.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
      {/* <JobCard /> */}
    </main>
  );
}
