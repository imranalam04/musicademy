import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import Whychooseus from "@/components/Whychooseus";
import TestimonialCard from "@/components/TestimonialCard";
import Upcomingwebinars from "@/components/Upcomingwebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   <main>
    <HeroSection />
    <FeaturedCourses />
    <Whychooseus />
    <TestimonialCard />
    <Upcomingwebinars />
    <Instructors /> 
    <Footer />
   </main> 
  );
}
