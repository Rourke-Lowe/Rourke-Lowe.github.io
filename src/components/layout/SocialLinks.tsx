import { Linkedin, Instagram } from 'lucide-react';
import EmailLink from './EmailLink';
import { iconLinkClass } from './iconLinkClass';

interface SocialLinksProps {
  showInstagram?: boolean;
}

const SocialLinks = ({ showInstagram = true }: SocialLinksProps) => {
  return (
    <div className="flex items-center gap-1 md:gap-2">
      {showInstagram && (
        <a
          href="https://www.instagram.com/___rourke___/"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
          className={iconLinkClass}
        >
          <Instagram size={24} />
        </a>
      )}
      <a
        href="https://www.linkedin.com/in/rourke-lowe-125311a5/"
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
        className={iconLinkClass}
      >
        <Linkedin size={24} />
      </a>
      <EmailLink />
    </div>
  );
};

export default SocialLinks;
