import BodyComponent from "./components/BodyComponent/Body";
import ProjectComponent from "./components/ProjectComponent/Project";
import TimelineComponent from "./components/TimelineComponent/Timeline";

export default function Home() {
  return (
    <main>
      <BodyComponent />
      <TimelineComponent />
      <ProjectComponent />
    </main>
  );
}
