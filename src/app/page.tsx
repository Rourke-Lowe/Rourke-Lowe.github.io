import MainLayout from '@/components/layout/MainLayout';
import Navigation from '@/components/layout/Navigation';
import ProfileContainer from '@/components/home/Profile/ProfileContainer';
import Hero from '@/components/home/Hero/Hero';
import ExperienceSection from '@/components/home/Experience/ExperienceSection';

export default function Home() {
  const profileData = {
    name: "Rourke Lowe",
    title: "Product Manager",
    location: "Canada - Montreal, QC | Toronto, ON",
    imageUrl: "/images/profileimg.jpeg",
  };

  return (
    <main>
      <Navigation />
      <MainLayout 
        profile={<ProfileContainer {...profileData} />}
        content={
          <>
          <Hero 
            headline="A generalist with a focus on product."
            subtitle="My approach to product, and life, is centered around listening and being creative. For me, listening comes from a curiosity to understand what makes people tick, and creativity comes from being open. Both benefit from lots of practice."
          />
            <ExperienceSection />
          </>
        }
      />
    </main>
  );
} 