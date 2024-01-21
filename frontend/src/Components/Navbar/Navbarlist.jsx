import {
 faBalanceScale,
  faFileAlt,
  faHome,
  faInfoCircle,
  faCogs,
  faQuestionCircle,
  faVideo,
  faBook, faNewspaper,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";


const Navbarlist = () => {
  const location = useLocation();

  const navbarList = [
    // {
    //   title: "Chatbot",
    //   url: "/chatbot",
    //   cName: "Navlinks",
    //   icon: faHome,
    // },
    {
      title: "Home",
      url: "/",
      cName: "Navlinks",
      // icon: faHome,
    },
    {
      title: "Contact",
      url: "/contact",
      cName: "Navlinks",
      icon: faEnvelope,
    },
     {
      title: "Blogs",
      url: "/Blogs",
      cName: "Navlinks",
      icon: faNewspaper,
    },
    {
      title: "Leaderboard",
      url: "/leaderboard",
      cName: "Navlinks",
      // icon: faEnvelope,
    },
    // {
    //   title: "B2B services",
    //   url: "/",
    //   cName: "Navlinks",
    //   // icon: faEnvelope,
    // },
    
  ];
  return (
    <>
      {navbarList.map((item, index) => {
        const isActive = location.pathname === item.url;
        const iconClass = isActive ? "active-icon" : "";
        const linkClass = isActive ? "active" : "";
        return (
          <div>
          <li key={index} className={linkClass}>
            <Link to={item.url} className={`${item.cName}`}>
              <FontAwesomeIcon icon={item.icon} className={iconClass} />
              {item.title}
            </Link>
          </li>
          </div>
        );
      })}
    </>
  );
};

export default Navbarlist;
