export const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			delayChildren: 0.2,
			staggerChildren: 0.2,
			duration: 1.5,
		},
	},
};

export const item = {
	hidden: { opacity: 0 },
	show: { opacity: 1, transition: { duration: 0.3, ease: "easeIn" } },
};
