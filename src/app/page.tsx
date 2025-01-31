import MainLayout from '@/components/layout/MainLayout';
import Navigation from '@/components/layout/Navigation';
import ProfileContainer from '@/components/home/Profile/ProfileContainer';
import Hero from '@/components/home/Hero/Hero';
import ExperienceSection from '@/components/home/Experience/ExperienceSection';
import AchievementsSection from '@/components/home/Achievements/AchievementsSection';

export default function Home() {
  const profileData = {
    name: "Alt Roourke",
    title: "Digital Product Designer",
    location: "San Francisco, CA",
    imageUrl: "/api/placeholder/256/256"
  };

  return (
    <main>
      <Navigation />
      <MainLayout 
        profile={<ProfileContainer {...profileData} />}
        content={
          <>
            <Hero 
              headline="Passionate creating great experiences for Digital Product"
            />
            <ExperienceSection />
            <AchievementsSection />
          </>
        }
      />
    </main>
  );
}