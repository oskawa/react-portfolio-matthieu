import { Outlet, useLocation } from "react-router-dom";
import Header from "../shared/header/header";
import Footer from "../shared/footer/footer";
import '../shared/responsive/max-desktop.scss';
import '../shared/responsive/max-mobile.scss';

export default function LayoutApp() {
  const location = useLocation();

  // Determine if the current path is the contact page
  const isContactPage = location.pathname === '/contact';

  return <div><Header /><Outlet />{!isContactPage && <Footer />}</div>
}