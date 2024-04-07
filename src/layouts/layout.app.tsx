import { Outlet } from "react-router-dom";
import Header from "../shared/header/header";
import Footer from "../shared/footer/footer";

export default function LayoutApp() {
  return <div><Header /><Outlet /><Footer /></div>
}