import { useHistory } from "react-router-dom";
export interface NavItemProps {
  requestOptions: any;
}

const NavItem: React.FC<NavItemProps> = ({ requestOptions }) => {
  const history = useHistory();
  return (
    <>
      {requestOptions?.map((item: any) => {
        const [key, { title, url }] = item;
        return (
          <h2
            onClick={() =>
              history.push({
                pathname: "/",
                search: `?genre=${key}`,
                state: { url: url },
              })
            }
            key={key}
            className="last:pr-16 cursor-pointer transition duration-100 transform hover:scale-125
          hover:text-white active:text-red-500"
          >
            {title}
          </h2>
        );
      })}
    </>
  );
};

export default NavItem;
