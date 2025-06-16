import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import AddList from './Components/AddList'
import History from './Components/History'
import Home from './Components/Home'
import './App.css'

function TopContainer() {
   const today = new Date();
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  const formattedDate = today.toLocaleDateString(undefined, options);

  return (
    <div className="topContainer">
          <Navbar />
      <div className="head">
        <div className="heading">Your Things</div>
        <div className="count">
          <div className="personal">
            <div className="num">24</div>
            <div className="name">Personal</div>
          </div>
          <div className="business">
            <div className="num">36</div>
            <div className="name">Business</div>
          </div>
        </div>
      </div>
      <div className="headBottom">{formattedDate}</div>
  
    </div>
  )
}

function Layout() {
  return (
    <div className="container">
      <TopContainer />
      <div className="bottomContainer">
        <Outlet />
      </div>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/addlist', element: <AddList /> },
      { path: '/history', element: <History /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App