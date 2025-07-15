import { Link } from "react-router";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-primary-bg text-black dark:bg-[#4c4c4d] dark:text-white pt-2">
      <div className="section-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 px-8 ">
        {/* Logo*/}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">
            <Link to="/">Panto</Link>
          </h2>
          <p className="md:mr-12">
            The advantage of hiring a workspace with us is that givees you
            comfortable service and all-around facilities.
          </p>
        </div>

        {/*Services Div*/}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-primary">Services</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-primary">
                Email Marketing
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-primary">
                Campaigns
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-primary">
                Branding
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-primary">
            Furnitures
          </h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-primary">
                Beds
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-primary">
                Chairs
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-primary">
                All
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-primary">Follow Us</h2>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="hover:text-primary flex items-center space-x-2"
              >
                <FaFacebook /> <span>Facebook</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-primary flex items-center space-x-2"
              >
                <FaSquareXTwitter /> <span>Twitte</span>r
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-primary flex items-center space-x-2"
              >
                <FaInstagram /> <span>Instagram</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/*Copyright */}
      <div className="dark:bg-gray-800 pb-5">
        <div className="mt-12 section-container flex flex-col sm:flex-row sm:justify-between sm:items-center sm:text-center gap-4 text-left text-black dark:bg-gray-800 dark:text-white border-t border-gray-300">
          <p>Copyright &copy;{new Date().getFullYear()}</p>
          <div className="flex items-center gap-4">
            <Link to="/">Terms & Conditions</Link>
            <Link to="/">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
