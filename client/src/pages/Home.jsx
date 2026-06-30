import Hero from "../components/Hero";
import HighlightsStrip from "../components/HighlightsStrip";
import AboutTeaser from "../components/AboutTeaser";
import MenuPreview from "../components/MenuPreview";
import BanquetTeaser from "../components/BanquetTeaser";

export default function Home() {
  return (
    <div>
      <Hero />
      <HighlightsStrip />
      <AboutTeaser />
      <MenuPreview />
      <BanquetTeaser />
    </div>
  );
}