import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-8">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/echodlsqntla/"
        target="_blank"
        rel="noreferrer">
        <FontAwesomeIcon
          icon="fa-brands fa-linkedin"
          className="text-red text-3xl opacity-75"></FontAwesomeIcon>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://wwww.facebook.com/echoquintanilla"
        target="_blank"
        rel="noreferrer">
        <FontAwesomeIcon
          icon="fa-brands fa-facebook"
          className="text-red text-3xl opacity-75"></FontAwesomeIcon>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/echodlsqntla"
        target="_blank"
        rel="noreferrer">
        <FontAwesomeIcon
          icon="fa-brands fa-twitter"
          className="text-red text-3xl opacity-75"></FontAwesomeIcon>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
