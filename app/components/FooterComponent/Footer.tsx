import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const FooterComponent = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content items-center p-4 bottom-0 fixed">
      <aside className="grid-flow-col items-center">
        <p>Copyright © 2025 - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://www.facebook.com/damien.magdangal/" target="__blank">
          <FaFacebook className="hover:text-gray-400" size={24} />
        </a>
        <a href="https://x.com/kuyaboooom" target="__blank">
          <FaXTwitter className="hover:text-gray-400" size={24} />
        </a>
        <a href="https://www.instagram.com/damien.magdangal" target="__blank">
          <FaInstagram className="hover:text-gray-400" size={24} />
        </a>
      </nav>
    </footer>
  );
};

export default FooterComponent;
