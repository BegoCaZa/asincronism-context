import { Route, Routes } from 'react-router-dom';
import Country from '../../pages/country/Country';
import Layout from '../layouts/Layout';
import Home from '../../pages/home/Home';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='country' element={<Country />} />
        </Route>
      </Routes>
    </>
  );
};
export default Router;
