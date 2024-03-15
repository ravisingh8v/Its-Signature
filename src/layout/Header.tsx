import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { PiSignatureFill } from "react-icons/pi";

export default function Header() {
  return (
    // <header className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 text-white">
    <header className="bg-black bg-gradient-to-r p-4 text-white">
      <div className="flex h-6 justify-between">
        <div className="brand-logo">
          <a href="/">
            <PiSignatureFill fontSize={30} />
          </a>
        </div>
        <div className="socials flex align-middle">
          <ul className="flex gap-3">
            <li className="social-links flex align-middle">
              <a href="https://www.google.com">
                <FaSquareInstagram fontSize={24} />
              </a>
            </li>
            <li className="social-links flex ">
              <a href="https://www.google.com" className="">
                <FaGithubSquare fontSize={24} />
              </a>
            </li>
            <li className="social-links ">
              <a href="https://www.google.com">
                <FaSquareXTwitter fontSize={24} />
              </a>
            </li>
            <li className="social-links">
              <a href="https://www.google.com">
                <FaLinkedin fontSize={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
