import CoreCourses from "./components/widgets/CoreCourses";
import Hero from "./components/widgets/Hero";
import PrgOutcome from "./components/widgets/PrgOutcome";
import SpecializedTrack from "./components/widgets/SpecializedTrack";

export default function Home() {
  return (
    <>
    <Hero></Hero>
    <CoreCourses/>
    <SpecializedTrack/>
    <PrgOutcome/>
    </>
  )
}
