import { Routes, Route, Navigate } from "react-router-dom";

import { Profile } from "../Pages/Profile";

import { Home } from "../Pages/Home";
import { Menu } from "../Pages/Menu";

import { ItemDetails } from "../Pages/ItemDetails";
import { Favorites } from "../Pages/Favorites";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/itemDetails/:id" element={<ItemDetails />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/favorites" element={<Favorites />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
