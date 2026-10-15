import ResumeButton from '@/components/home/ResumeButton';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="mt-14 lg:mt-20 py-6 lg:py-8 mb-6 border-t border-gray-100 flex items-center justify-between">
      <ResumeButton />
      <SocialLinks showInstagram={false} />
    </footer>
  );
};

export default Footer;
