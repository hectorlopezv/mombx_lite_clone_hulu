import React from "react";
import LazyLoad from "react-lazyload";
import HuluIcon from "./Hulu_Icon";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/solid";
export interface HeaderProps {}
const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="">
      <div>
        <HeaderItem title="Home" Icon={HomeIcon} />
      </div>
      <LazyLoad height={200} once>
        <HuluIcon height={100} width={200} className={"object-contain"} />
      </LazyLoad>
    </header>
  );
};

export default Header;
