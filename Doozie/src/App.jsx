import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import React, { useState } from 'react';
import { useEffect } from 'react';
import Navbar from './Components/Navbar'
import Addlist from './Components/AddList'

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

function Layout({ todo, setTodo, todos, setTodos, completedTodos, setCompletedTodos }) {
  return (
    <div className="container">
      <TopContainer />
      <div className="bottomContainer">
        <Outlet context={{ todo, setTodo, todos, setTodos, completedTodos, setCompletedTodos }} />
      </div>
    </div>
  )

}

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       { path: '/', element: <Home /> },
//       { path: '/addlist', element: <Addlist /> },
//       { path: '/history', element: <History /> },
//     ],
//   },
// ])

function App() {
  const [todo, setTodo] = useState('');
  // const [todos, setTodos] = useState([]);
  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  });

  // const [completedTodos, setCompletedTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState(() => {
    const stored = localStorage.getItem("completedTodos");
    return stored ? JSON.parse(stored) : [];
  });

  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos} />,
      children: [
        { path: '/', element: <Home todos={todos} setTodos={setTodos} /> },
        { path: '/addlist', element: <Addlist /> },
        { path: '/history', element: <History /> },
      ],
    },
  ]);


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("completedTodos", JSON.stringify(completedTodos));
  }, [completedTodos]);


  return <RouterProvider router={router} />;


}

export default App