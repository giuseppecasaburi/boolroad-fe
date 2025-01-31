import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./layout/AppLayout"
import Homepage from "./pages/Homepage"
import SingleTravel from "./pages/SingleTravel"


function App() {
 

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route element={<AppLayout/>}>
            <Route index element={<Homepage/>}/>
            <Route path="/travel" element={<SingleTravel/>}/>
          </Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
