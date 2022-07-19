import logo from '../logo.svg';
import '../App.css';
import {Routes, Route} from "react-router-dom";


function App() {
  return (
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='posts' element={<Posts/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='flex-layout' element={<FlexBoxLayout/>}/>
        <Route path='grid-layout' element={<GridLayout/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="customer" element={<Customer/>}/>
        <Route path="item" element={<Item/>}/>
        <Route exact path='/' element={<DashBoard/>}/>
      </Routes>

  );
}

export default App;
