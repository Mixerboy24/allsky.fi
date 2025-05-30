import { appVersion } from '../../utils/version';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-sm py-2 px-4">
      <div className="flex flex-wrap justify-between items-center max-w-screen-lg mx-auto gap-2">
        
        {/* Copyright & Versio */}
        <div className="flex flex-col items-start">
          <span>&copy; {new Date().getFullYear()} Allsky.fi</span>
          <span className="text-xs opacity-70">Version: {appVersion}</span>
        </div>

        {/* LakkaHostin Logo */}
        <a
          href="https://lakkahost.fi?track=allskyfi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/img/Hosted_by_LakkaHost.svg"
            alt="LakkaHost Logo"
            className="w-[100px] h-auto"
          />
        </a>

      </div>
    </footer>
  );
};

export default Footer;
