import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Chapters from './pages/Chapters'
import ChapterDetail from './pages/ChapterDetail'
import Members from './pages/Members'
import MemberProfile from './pages/MemberProfile'
import VisitMeeting from './pages/VisitMeeting'
import About from './pages/AboutUs'
import EventsPage from './pages/EventsPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="chapters" element={<Chapters />} />
        <Route path="chapters/:slug" element={<ChapterDetail />} />
        {/* <Route path="members" element={<Members />} /> */}
        {/* <Route path="/members/:uid" element={<MemberProfile />} /> */}
        <Route path="visit-meeting" element={<VisitMeeting />} />
        <Route path="about" element={<About />} />
        <Route path="events" element={<EventsPage />} />
      </Route>
    </Routes>
  )
}