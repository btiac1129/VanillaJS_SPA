import Home from "./pages/home.js";
import DetailPage from "./pages/id.js";
import Login from "./pages/login.js";
import Signup from "./pages/signup.js";
import Error404 from "./pages/error404.js";

import { parseCurrentUrl } from "./core/router.js";

const router = async () => {
  const $content = null || document.getElementById("content");
  const pageList = {
    "/#": Home,
    "/:id": DetailPage,
    "/#login": Login,
    "/#signup": Signup,
  };
  const { routes } = parseCurrentUrl();
  const parsedUrl = 
    (routes ? `/${routes}` : "/") +
    (id ? `/:id` : '');
    
  const page = pageList[parsedUrl] || Error404;
  new page($content, {});
};

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
