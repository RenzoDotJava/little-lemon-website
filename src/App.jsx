import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Layout, HomePage, BookingPage} from "./pages";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<HomePage/>}/>
          <Route path="booking" element={<BookingPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App