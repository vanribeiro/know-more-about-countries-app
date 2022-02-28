import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Select, List, Item } from "./style";

const SelectInput = () => {
  const [selectTitle, setSelectTitle] = useState("");
  const [region, setRegion] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const pathname = window.location.pathname;
    if (pathname.length === 1) {
      setSelectTitle("Find By Region: ");
    } else if (pathname.search("region")) {
      setSelectTitle(pathname.split("/")[2]);
    }
  }, [setSelectTitle]);

  const toggleSelectList = () => (isOpen ? setIsOpen(false) : setIsOpen(true));

  const handleSelectClick = () => toggleSelectList();

  const handleItemClick = (event) => {
    const value = event.target.dataset.valueRegion;
    setRegion(value);
    setSelectTitle(value);
    toggleSelectList();
  };

  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  return (
    <>
      <Select
        id="select-filter"
        onClick={handleSelectClick}
        selectValue={region}
      >
        <span className="select-header__text">
          {selectTitle}
          <FontAwesomeIcon
            className="angle-icon"
            icon={isOpen ? faAngleDown : faAngleUp}
          />
        </span>
      </Select>

      <List style={isOpen ? { display: "none" } : { display: "block" }}>
        {regions.map((region, id) => {
          return (
            <Link key={id} to={`/region/${region.toLowerCase()}`}>
              <Item onClick={handleItemClick} data-value-region={`${region}`}>
                {region}
              </Item>
            </Link>
          );
        })}
        <Link to="/">
          <Item onClick={handleItemClick} data-value-region="Home">
            All Countries
          </Item>
        </Link>
      </List>
    </>
  );
};

export default SelectInput;
