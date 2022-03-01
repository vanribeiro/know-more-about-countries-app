import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faInstagram, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Footer = styled.footer`
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.text};
  padding: 8px 0;

  a {
    color: ${({ theme }) => theme.linkText};
  }

  .footer__social-media{
    display: inline-flex;
    justify-content: space-around;
    width: 100px;
    align-items: center;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Footer>
      <div className="attribution">
        <p>
            Coded by{" "}
            <a
            href="https://vanribeiro.github.io/"
            target="_blank"
            rel="noreferrer"
            title="Van Ribeiro website's"
            >
            Van Ribeiro |
            </a>{" "}
            <span className="footer__social-media">
                <a
                    href="https://github.com/vanribeiro"
                    target="_blank"
                    rel="noreferrer"
                    title="Github"
                >
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
                <a
                    href="mailto:vanribeiro.dev@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    title="E-mail"
                >
                    <FontAwesomeIcon icon={faEnvelope}/>
                </a>
                <a
                    href="https://www.instagram.com/vanribeiro.dev"
                    target="_blank"
                    rel="noreferrer"
                    title="Instagram"
                >
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                    href="https://twitter.com/vanribeirodev"
                    target="_blank"
                    rel="noreferrer"
                    title="Twitter"
                >
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </span>
        </p>
        <p>
            Challenge by{" "}
            <a
            href="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca/hub/react-and-fetch-api-ZPqDs-lzz"
            target="_blank"
            rel="noreferrer"
            title="Frontend Mentor Challange"
            >
            Frontend Mentor
            </a>. 
        </p>
        
      </div>
    </Footer>
  );
};
