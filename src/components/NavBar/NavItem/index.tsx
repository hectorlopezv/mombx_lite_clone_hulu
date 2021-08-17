import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";
import { useStores } from "../../../stores/helpers/use-stores";
export interface NavItemProps {
  requestOptions: any;
}

const NavItem: React.FC<NavItemProps> = ({ requestOptions }) => {
  const history = useHistory();
  const {
    uiStores: { globalView },
  } = useStores();
  return (
    <>
      {requestOptions?.map((item: any) => {
        const [key, { title, url }] = item;
        //console.log("key", key);
        //console.log("url", url);
        return (
          <h2
            onClick={() => {
              //sharring state with query params
              history.push({
                pathname: "/",
                search: `?genre=${key}`,
                //state: { url: url },
              });

              //share state with mobx
              globalView.updateGenre(key);
            }}
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

export default observer(NavItem);
