import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Publications from "@/components/publications/Publications";
import Education from "@/components/education/Education";
import Contact from "@/components/contact/Contact";
import TechScrollStrip from "@/components/ui/TechScrollStrip";
import Footer from "@/components/footer/Footer";
import {
  fetchGitHubProfile,
  fetchGitHubRepos,
  type GitHubRepo,
} from "@/lib/github";

export const revalidate = 3600;

export default async function Home() {
  const avatarUrl = "/Me.jpeg";
  let publicRepos = 0;
  let followers = 0;
  let repos: GitHubRepo[] = [];

  try {
    const [profile, githubRepos] = await Promise.all([
      fetchGitHubProfile(),
      fetchGitHubRepos(),
    ]);

    publicRepos = profile.public_repos;
    followers = profile.followers;
    repos = githubRepos;
  } catch {
    // Use fallback values
  }

  return (
    <>
      <Hero avatarUrl={avatarUrl} />
      <TechScrollStrip />
      <About
        avatarUrl={avatarUrl}
        publicRepos={publicRepos}
        followers={followers}
      />
      <Education />
      <Skills />
      <Projects repos={repos} />
      <Publications />
      <Contact />
      <Footer />
    </>
  );
}
