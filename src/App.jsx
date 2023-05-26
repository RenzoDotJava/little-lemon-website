import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Layout, HomePage, BookingPage, BookingConfirmationPage} from "./pages";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="booking">
            <Route path="" element={<BookingPage />} />
            <Route path="confirmation" element={<BookingConfirmationPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App