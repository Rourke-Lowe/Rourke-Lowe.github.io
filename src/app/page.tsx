import MainLayout from '@/components/layout/MainLayout';
import Navigation from '@/components/layout/Navigation';
import ProfileContainer from '@/components/home/Profile/ProfileContainer';
import Hero from '@/components/home/Hero/Hero';
import ResumeButton from '@/components/home/ResumeButton';
import ExperienceSection from '@/components/home/Experience/ExperienceSection';
import ProjectsSection from '@/components/home/Projects/ProjectsSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  const profileData = {
    name: "Rourke Lowe",
    title: "Product Manager",
    location: "Victoria, BC",
    note: "Remote, open to travel",
    imageUrl: "/images/profile.jpg",
    mobileImageUrl: "/images/profile-mobile.jpg",
  };

  return (
    <main>
      <Navigation />
      <MainLayout 
        profile={<ProfileContainer {...profileData} />}
        content={
          <>
            <Hero
              headline="I take ideas from zero to one."
              subtitle="I love where digital & physical experiences merge into a holistic vibe."
            />
            <div className="pt-6 pb-14 lg:pt-8 lg:pb-16">
              <ResumeButton />
            </div>
            <ExperienceSection />
            <ProjectsSection />
            <Footer />
          </>
        }
      />
    </main>
  );
} 