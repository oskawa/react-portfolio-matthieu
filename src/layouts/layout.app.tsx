import { Outlet } from "react-router-dom";
import Header from "../shared/header/header";

export default function LayoutApp() {
  return <div><Header /><Outlet /></div>
}