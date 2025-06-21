# Doozie-a-taskflow-web-app-
📌 Project Report: Doozie – To-Do List Web App
🧠 Overview:
Doozie is a responsive to-do list web application built using React.js and React Router DOM. It enables users to create, manage, and delete tasks with a clean UI. The standout feature is its use of Local Storage, allowing persistent task data even after page refresh—ensuring that the user's to-do list stays intact unless intentionally cleared.

🔧 Key Features:
=> dd tasks with categories (Personal/Business), optional notes, and deadlines.

=> Mark tasks as completed, moving them to a separate history.

=> Delete tasks from active or completed views.

=> Persistent storage using localStorage.

=> Responsive design with navigation via navbar and hamburger menu.

=> Date display with formatted today’s date.

⚙️ Tech Stack:
=> React.js (with Hooks like useState, useEffect)

=> React Router DOM for client-side routing

=> LocalStorage API for data persistence

=> CSS Modules (.css files) for component styling

=> SVG Icons for buttons

🧩 Component Architecture:
Component	     Purpose
App.jsx        	 Main container, handles routing, state, and localStorage synchronization
Navbar.jsx	     Navigation menu with hamburger toggle
TopContainer()	 Displays the app header with date, counts, and navigation
Layout	         Shares state via OutletContext across routes
AddList.jsx	     Form to add new tasks
Home.jsx	     Lists active tasks with complete and delete actions
History.jsx	     Displays completed tasks with delete functionality

🗂️ State & Key Variable Table:
Variable / Key   	Type	      Defined In	                Purpose
todo	           string	       App.jsx	                 Input text for the current task
todos	           array of obj	    App.jsx	                 Active tasks list
completedTodos	   array of obj  	App.jsx	                 Completed tasks list
setTodo	            function	    App.jsx	                 Updates the todo input field
setTodos	        function	    App.jsx	                 Updates the active task list
setCompletedTodos	function	    App.jsx	                 Updates the completed task list
handelAdd()      	function	    AddList.jsx	             Adds a new task to the list
handelDone(id)   	function	    Home.jsx    	        Moves a task to completedTodos
handelDel(id)	    function    	Home.jsx, History.jsx	Deletes task from respective list
useOutletContext()	 hook	        Various	                Access shared state in child routes
localStorage	    Web API	        App.jsx, others     	Stores and retrieves todos persistently
menuOpen	        boolean	        Navbar.jsx	            Controls hamburger menu visibility
formattedDate   	string	        TopContainer	        Displays current date in readable format

✅ What Makes It Stand Out:
=>Data doesn’t vanish on refresh thanks to localStorage.

=>Minimalist and responsive UI works well on both desktop and mobile.

=>Simple architecture with clean separation of concerns across components.


