import React from "react";
import Features from "../../components/features/Features";
import SuggestedCourses from "../../components/suggestedCourses/SuggestedCourses";
import PopularCourses from "../../components/popularCourses/PopularCourses";
import ShortAbout from "../../components/shortAbout/ShortAbout";
import TeachersCourse from "../../components/teachersCourse/TeachersCourse";
import LastWeblog from "../../components/lastWeblog/LastWeblog";
import Representatives from "../../components/representatives/Representatives";
export default function Home() {
  return (
    <div>
      <Features />
      <SuggestedCourses />
      <PopularCourses />
      <ShortAbout />
      <TeachersCourse />
      <LastWeblog />
      <Representatives />
    </div>
  );
}
