import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/main';
import Detail from './components/detail';
import md5 from 'md5';

const App = () => {
  // url: https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=e9b4ba868ab62a7171f39394050af8ea&hash=2c33ac85c56cf913cbbdb80b660e894d
  // publickey: e9b4ba868ab62a7171f39394050af8ea
  // privatekey: e9b4ba868ab62a7171f39394050af8eac
  // var ts = new Date().getTime();
  // var stringToHash = ts + privatekey + publickey;
  // var hash = md5(stringToHash);
  // console.log(ts);
  return (
    <>
    <Router> 
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
