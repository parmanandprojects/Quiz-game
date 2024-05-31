import logo from './logo.svg';
import './App.css';
import QuesFormat from './components/quizGame/QuesFormat';
import { ToastContainer, toast } from 'react-toastify';
import OrgChartTree from './treeview/OrgChartTree';
import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import MyInfiniteScroll from './components/myinfinteScroll/MyInfiniteScroll';

function App() {
  return (
  <>
  

  <Routes>
    <Route path="/" element={<Home/>}  />
    <Route path="/tree-view" element={<OrgChartTree/>}  />
    <Route path="/quiz-game" element={<QuesFormat/>}  />
    <Route path="/infinte-scroll" element={<MyInfiniteScroll/>}  />
    {/* <Routes   /> */}
  </Routes>
  <ToastContainer
position="top-right"
autoClose={300}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"

/>
  </>)
}

export default App;
