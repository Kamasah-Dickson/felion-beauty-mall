import "./globals.scss";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "500", "700", "900"],
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
			<body className={roboto.className}>{children}</body>
		</html>
	);
}
