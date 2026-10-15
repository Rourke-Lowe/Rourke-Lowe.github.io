import SocialLinks from './SocialLinks';

const Navigation = () => {
  return (
    <nav className="w-full px-2.5 pt-3 lg:px-[22px] lg:py-[30px]">
      <div className="max-w-6xl mx-auto flex justify-end items-center">
        <SocialLinks />
      </div>
    </nav>
  );
};

export default Navigation;
