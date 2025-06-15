import Navbar from './Components/Navbar'
import './App.css'



function App() {

  return (
    <>

      <div className="container">

        <div className="topContainer">
          <Navbar />
          <div className="head">
            <div className="heading">Your Things</div>
            <div className="personal">24</div>
            <div className="business">36</div>
          </div>
          <div className="headBottom">Date</div>
        </div>
        <div className="bottomContainer">
          bottomContainer
        </div>



      </div>


    </>
  )
}

export default App
