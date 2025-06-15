import Navbar from './Components/Navbar'
import AddList from './Components/AddList'
import './App.css'



function App() {

  return (
    <>

      <div className="container">

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
          <div className="headBottom">Apr 1,
            2005</div>
        </div>
        <div className="bottomContainer">
         
 <AddList />
        </div>


      </div>


    </>
  )
}

export default App
