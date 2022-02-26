import { urlBase } from "../../service/api";
import { useParams } from "react-router-dom";
import Common from "../Common";

const Region = ({toggleTheme}) => {

  let { id } = useParams();
  const url = `${urlBase}/region/${id}`;
  const titlePage = window.location.pathname.split('/')[2];

  return (
    <>
      <Common 
        id={id} 
        toggleTheme={toggleTheme}
        url={url}
        titlePage={titlePage}
      />
    </>
  )
};

export default Region;
