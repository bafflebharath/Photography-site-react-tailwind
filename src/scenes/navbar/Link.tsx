import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  onClick?: () => void; // New prop for onClick callback
};

const Link = ({ page, selectedPage, setSelectedPage, onClick }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  const handleClick = () => {
    setSelectedPage(lowerCasePage); // Call setSelectedPage with the new page
    if (onClick) {
      onClick(); // Call the onClick callback if provided
    }
  };

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-white" : ""} transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={handleClick} // Call handleClick when the link is clicked
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
