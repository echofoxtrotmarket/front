import { Routes, Route } from 'react-router-dom';
import { Home } from '@Pages/Home/Home';
import { Favorites } from '@Pages/Favorites/Favorites';
import { Cart } from '@Pages/Cart';
import { Login } from '@Pages/Login/Login';
import { Registration } from '@Pages/Registration';
import { SingleMarket } from '@Pages/SingleMarket/SingleMarket';
import { NotFound } from '@Pages/NotFound/NotFound';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorite" element={<Favorites />} />
      <Route path="/cart" element={<Cart />} />

      <Route path="/market/:id" element={<SingleMarket />} />

      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
