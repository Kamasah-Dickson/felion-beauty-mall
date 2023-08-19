import "./globals.scss";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "./components/Header";
import AppContext from "./context/appContext";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
	title: "Felion Beauty Mall",
	description: "Explore and shop quality cosmetic products across Ghana",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={roboto.className}>
				<AppContext>
					<>
						<Header />
						{children}
					</>
				</AppContext>
			</body>
		</html>
	);
}
