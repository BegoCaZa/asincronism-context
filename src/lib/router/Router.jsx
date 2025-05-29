import { Route, Routes } from "react-router-dom"
import Country from "../../pages/country/Country"

const Router =()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={}>
            <Route index element={<Home />} />
          <Route path='country' element={<Country />} />
            </Route>
            </Routes></>
    )
}
export default Router;