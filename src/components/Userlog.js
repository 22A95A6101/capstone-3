// import logo from './logo.svg';
import Logout from './Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import UserCars from './UserCars'
import Status from './Status.js'
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
          <Route path='/' element={<UserCars/>}/>
          <Route path='/Bloomberg' element={<Bloomberg/>}/>
          <Route path='/Autocar' element={<Autocar/>}/>
          <Route path='/Hyundaivertina' element={<Hyundaivertina/>}/>
          <Route path='/Hyundaicreta' element={<Hyundaicreta/>}/>
          <Route path='/Hyundai New Kona' element={<Hyundainewkona/>}/>
          <Route path='/Mercedescar' element={<Mercedescar/>}/>
          <Route path='/Audi' element={<Audi/>}/>
          <Route path='/Ferrari' element={<Ferrari/>}/>
          <Route path='/status' element={<Status/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path='/usercars' element={<UserInfo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;




