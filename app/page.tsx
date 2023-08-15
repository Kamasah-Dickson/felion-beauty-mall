import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

export default function Home() {
	return (
		<div className="max-w-[1440px] mx-auto">
			<Header />
			<section className="my-max md:px-5">
				<HeroSection />
			</section>
		</div>
	);
}
