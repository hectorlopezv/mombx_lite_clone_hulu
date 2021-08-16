import React from "react";
export interface HuluIconProps {
  height: number;
  width: number;
  className?: string;
}

const HuluIcon: React.FC<HuluIconProps> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 170" {...props}>
      <path
        d="M184.3 120.6h17.2V49.4h-17.2v71.2zm-30.2-20.3c0 2.5-2.1 4.6-4.6 4.6h-10c-2.5 0-4.6-2.1-4.6-4.6V71.6h-17.2v30.1c0 12.3 7.9 18.8 19.5 18.8H154c10.7 0 17.2-7.7 17.2-18.8V71.6H154c.1 0 .1 27.8.1 28.7zm96.7-28.7v28.7c0 2.5-2.1 4.6-4.6 4.6h-10c-2.5 0-4.6-2.1-4.6-4.6V71.6h-17.2v30.1c0 12.3 7.9 18.8 19.5 18.8h16.8c10.7 0 17.2-7.7 17.2-18.8V71.6h-17.1zM86 71.6H75c-3.9 0-5.8 1-5.8 1V49.4H52v71.1h17.1V91.9c0-2.5 2.1-4.6 4.6-4.6h10c2.5 0 4.6 2.1 4.6 4.6v28.7h17.2v-31c0-13-8.7-18-19.5-18z"
        fill="#1db57c"
      />
    </svg>
  );
};

export default HuluIcon;
