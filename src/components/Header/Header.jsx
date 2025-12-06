import { CgMenuRightAlt } from "react-icons/cg";
import logo_cropped from "@assets/logo_nt.png";

import { Link } from "react-router";

function Header() {
  return (
    <>
      <header className="wrapper w-full h-13  py-1.5 flex items-center justify-between">
        <Link to="/" className="h-full">
          <img className="h-full w-auto" src={logo_cropped} alt="Logo" />
        </Link>

        <CgMenuRightAlt className="text-[26px] text-accent-500 cursor-pointer" />
      </header>
      <aside></aside>
    </>
  );
}

export default Header;
