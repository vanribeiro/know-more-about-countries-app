import { ReactComponent as ArrowLeft } from "./../../assets/icons/arrow-left.svg";
import { useNavigate } from "react-router-dom";
import { ButtonContainer, TopButton } from "./style";

const BackButton = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <ButtonContainer>
        <TopButton onClick={handleClick}>
          <ArrowLeft className="arrow-left-icon" style={{ width: "18px" }} />
          Back
        </TopButton>
      </ButtonContainer>
    </>
  );
};

export default BackButton;
