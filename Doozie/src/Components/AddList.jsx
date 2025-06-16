import React from 'react'
import "./AddList.css"

const AddList = () => {
  return (
    <>
      <div className="bottom">
        <h1>Add new thing</h1>
        <div className="addListLogo"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
          <path d="M16 2V4M11 2V4M6 2V4" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M19.5 10C19.5 6.70017 19.5 5.05025 18.4749 4.02513C17.4497 3 15.7998 3 12.5 3H9.5C6.20017 3 4.55025 3 3.52513 4.02513C2.5 5.05025 2.5 6.70017 2.5 10V15C2.5 18.2998 2.5 19.9497 3.52513 20.9749C4.55025 22 6.20017 22 9.5 22H12.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M17.5 14L17.5 22M21.5 18L13.5 18" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path>
          <path d="M7 15H11M7 10H15" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path>
        </svg>
        </div>
        <form className='form' action="">
          <input className='taskName1' type="text" placeholder='Enter your task' required />
          <input className='taskName2' type="text" placeholder='Note?'/>
          <span>
          <label for="target">Select target : </label>
          <select name="Time" id="">
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="fortnight">Fortnight</option>
            <option value="month">Month</option>
          </select>
          </span>
            <input type="submit" className='submit' value="Submit"  onClick={()=>{
             
              setTimeout(() => {
                 alert("List added")
              }, 2000);
            }}>

            </input>
        </form>

      </div>

    </>
  )
}

export default AddList
