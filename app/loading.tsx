const loading = () => {
	return (
		<div className="spinner-container absolute top-0 left-0 grid place-content-center h-screen z-30 w-full bg-[#12122b]">
			<div className="loading-spinner"></div>
		</div>
	);
};

export default loading;
