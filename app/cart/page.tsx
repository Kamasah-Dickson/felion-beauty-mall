import { BsArrowLeft } from "react-icons/bs";
import CheckoutCard from "../components/CheckoutCard";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Felion Beauty Mall - Cart",
	description: "Checkout and get free gifts from Felion Beauty mall",
};

const page = () => {
	return (
		<div className="cart-bg">
			<section className="my-max">
				<div className="py-24 flex-wrap-reverse flex items-center justify-between gap-5">
					<h1 className=" w-fit sm:text-5xl text-[36px]  font-bold text-white  md:text-7xl">
						My Cart
						<div className="after:rounded-full after:top-1/2 after:-translate-y-1/2  after:h-4 after:w-4 after:bg-white after:block after:absolute after:-right-1 rounded-full md:mt-5 sm:mt-6  ml-auto  w-3/4 h-1 bg-white relative"></div>
					</h1>
					<button
						type="button"
						className="flex items-center gap-5 border rounded-xl py-2 px-5 active:scale-[1.02]"
					>
						<BsArrowLeft color="white" size={25} />
						<p className="text-white font-medium">Continue Shopping</p>
					</button>
				</div>
				<CheckoutCard />
			</section>
		</div>
	);
};

export default page;
