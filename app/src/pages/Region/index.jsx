import { urlBase } from "../../service/api";
import { useParams } from "react-router-dom";
import Common from "../Common";

const Region = ({toggleTheme}) => {
  let { id } = useParams();
  const url = `${urlBase}/region/${id}`;
  
  const capitalizeFirstPageTitle = () => {
    const pageName = window.location.pathname.split('/')[2];
    const splitPageName = pageName.split('');
    const firstLetter = splitPageName.splice(0, 1);
    splitPageName.unshift(firstLetter[0].toLocaleUpperCase());
    const title = splitPageName.join('');

    return title;
  }

  const titlePage = capitalizeFirstPageTitle();

  return (
    <>
      <Common
        toggleTheme={toggleTheme}
        url={url}
        titlePage={titlePage}
      />
    </>
  )
};

export default Region;
