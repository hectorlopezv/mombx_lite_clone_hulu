import React from "react";
export interface HeaderItemProps {
  title: string;
  Icon: any;
}

const HeaderItem: React.FC<HeaderItemProps> = ({ title, Icon }) => {
  return (
    <div className="group cursor-pointer hover:text-pink-900">
      <Icon className="h-8 mb-1" />

      <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
    </div>
  );
};

export default HeaderItem;
