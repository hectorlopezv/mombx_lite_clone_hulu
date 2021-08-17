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
} from "@heroicons/react/outline";
export interface HeaderProps {}
const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="flex flex-col items-center m-5 justify-between sm:flex-row h-auto">
      <div className="flex flex-grow items-center justify-center max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} genreKey={""} />
        <HeaderItem
          title="TRENDING"
          Icon={LightningBoltIcon}
          genreKey={""}
        />
        <HeaderItem
          title="VERIFIED"
          Icon={BadgeCheckIcon}
          genreKey={"fetchTrending"}
        />
        <HeaderItem
          title="COLLECTIONS"
          Icon={CollectionIcon}
          genreKey={"fetchTrending"}
        />
        <HeaderItem
          title="SEARCH"
          Icon={SearchIcon}
          genreKey={"fetchTrending"}
        />
        <HeaderItem
          title="ACCOUNT"
          Icon={UserIcon}
          genreKey={"fetchTrending"}
        />
      </div>
      <LazyLoad once>
        <HuluIcon
          height={80}
          width={150}
          className={"object-contain sm:mb-10"}
        />
      </LazyLoad>
    </header>
  );
};

export default Header;
