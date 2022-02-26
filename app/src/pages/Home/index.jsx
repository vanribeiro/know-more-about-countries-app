import { urlBase } from "../../service/api";
import Common from "../Common";

const Home = ({toggleTheme}) => {
  const url = `${urlBase}/all?fields=flags,name,population,region,capital,cca3`;
  const titlePage = 'Where in the world?';

  return (
    <>
      <Common 
        toggleTheme={toggleTheme}
        url={url}
        titlePage={titlePage}
      />
    </>
  );

};

export default Home;
