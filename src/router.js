import MainCourse from './pages/mainCourse/MainCourse.jsx'
import About from './pages/about/About'
import Contact from './pages/contact/Contact.js'
import Courses from './pages/courses/Courses'
import Home from './pages/home/Home'
import NotFound from './pages/notFound/NotFound.js'
import TeacherProfile from './pages/teacherProfile/TeacherProfile.jsx'

let router = [
    {path: '/', element: <Home />},
    {path: '/courses', element: <Courses />},
    {path: '/about', element: <About />},
    {path: '/contact', element: <Contact />},
    {path: '*', element: <NotFound />},
    {path: '/course/:courseID', element: <MainCourse />},
    {path: '/teacher/:teacherID', element: <TeacherProfile />}
]


export default router