import HeroSection from "./components/HeroSection";
import { Metadata } from "next";
import Trending from "./components/Trending";

export const metadata: Metadata = {
	title: "Welcome to Felion Beauty Mall",
	description:
		"Explore and shop from the most quality and trusted cosmetic shop in Ghana",
};

export default function Home() {
	return (
		<>
			<HeroSection />
			<Trending />
		</>
	);
}
