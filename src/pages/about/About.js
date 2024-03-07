import React from 'react'
import AboutFactInfo from '../../components/aboutfactInfo/AboutFactInfo'
import TeachersCourse from '../../components/teachersCourse/TeachersCourse'
import StudentPoint from '../../components/studentsPoint/StudentPoint'

export default function About() {
  return (
    <div>
      <AboutFactInfo />
      <TeachersCourse background='#f4f8fa ' />
      <StudentPoint />
    </div>
  )
}
