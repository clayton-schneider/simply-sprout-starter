// Import Types
import { FunctionComponent } from "react";
import { Navigation } from "../../typings";

import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";

import Link from "next/link";

interface IHeaderProps {
  navigation: Navigation;
}

const Header: FunctionComponent<IHeaderProps> = ({ navigation }) => {
  return (
    <header className="my-5 flex- items-center justify-between">
      <Link href="/">
        <h1 className="cursor-pointer text-3xl font-bold text-gray-700">
          Website Name
        </h1>
      </Link>

      {/* Navigation Links */}
      <div className="relative z-30 hidden space-x-4 md:block">
        {navigation &&
          navigation.map((item, index) => (
            <NavLink
              key={`link-${index}`}
              className="text-xl text-gray-700"
              {...item}
            />
          ))}
      </div>

      <MobileMenu className="md:hidden" navigation={navigation} />
    </header>
  );
};

export default Header;
