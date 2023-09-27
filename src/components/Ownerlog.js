// import logo from './logo.svg';
import Login from './Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Ownercars from './Ownercars'
import Header from './Header'
import Bloomberg from './Bloomberg'
import Autocar from './Autocar'
import Hyundaivertina from './Hyundaivertina.js'
import Hyundaicreta from './Hyundaicreta';
import 'bootstrap/dist/css/bootstrap.css';
import Hyundainewkona from "./Hyundainewkona"
import Mercedescar from "./Mercedescar.js"
import Audi from './Audi'
import Ferrari from './Ferrari'
import UserInfo from './UserCars';

function App() {
  return (
    <div>
      {/* <Login/> */}
      {/* <UserInfo/> */}
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Ownercars/>}/>
          <Route path='/Bloomberg' element={<Bloomberg/>}/>
          {/* <Route path='/Autocar' element={<Autocar/>}/>
          <Route path='/Hyundaivertina' element={<Hyundaivertina/>}/>
          <Route path='/Hyundaicreta' element={<Hyundaicreta/>}/>
          <Route path='/Hyundai New Kona' element={<Hyundainewkona/>}/>
          <Route path='/Mercedescar' element={<Mercedescar/>}/>
          <Route path='/Audi' element={<Audi/>}/>
          <Route path='/Ferrari' element={<Ferrari/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;




