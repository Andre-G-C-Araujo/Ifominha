import { Routes, Route, Navigate } from "react-router-dom";

import { RegisterItem } from "../Pages/RegisterItem";
import { EditItem } from "../Pages/EditItem";

import { Profile } from "../Pages/Profile";

import { Home } from "../Pages/Home";
import { Menu } from "../Pages/Menu";

import { ItemDetails } from "../Pages/ItemDetails";
import { Favorites } from "../Pages/Favorites";

export function AppAdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registeritem" element={<RegisterItem />} />
      <Route path="/edititem/:id" element={<EditItem />} />
      <Route path="/itemDetails/:id" element={<ItemDetails />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/favorites" element={<Favorites />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
