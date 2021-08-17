import requestOptions from "../../utils/request";
import NavItem from "./NavItem";
export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const options = Object.entries({ ...requestOptions });
  return (
    <nav className="relative m-4">
      <div className="pl-15 flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        <NavItem requestOptions={options} />
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
    </nav>
  );
};

export default NavBar;
