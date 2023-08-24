"use client";
import React from "react";
import CartItem from "./CartItem";
import { useContext, useEffect } from "react";
import { ProductContext } from "../context/appContext";

const CheckoutCard = () => {
	const { cart, setCart } = useContext(ProductContext);

	const totalCartPrice = cart.reduce((accumulator, currentProduct) => {
		return 0;
	}, 0);

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-7 py-5">
			<CartItem cart={cart} setCart={setCart} />
			<div className="bg-white shadow-xl md:max-w-lg md:ml-auto rounded-2xl sticky p-7 top-20 h-fit right-0">
				<h2 className="mb-3 text-2xl font-bold ">Choose a shipping mode:</h2>
				<div className="flex flex-col gap-20">
					<div>
						<div className="flex mb-2 items-center gap-3">
							<input type="checkbox" checked />
							<p className="font-bold text-lg">Store Pickup (Free)</p>
						</div>
						<div className="flex items-center gap-3">
							<input type="checkbox" />

							<p className="text-[#535252]">
								Delivery at home (Under 2 - 4 days){" "}
								<span className="text-black font-bold">GH 4</span>{" "}
							</p>
						</div>
					</div>
					<div>
						<div className="flex text-2xl font-bold items-center gap-5">
							<p className="text-[#535252]">Shipping</p>
							<span>GH20.0</span>
						</div>
						<div className="flex text-2xl font-bold items-center gap-5">
							<p className="text-[#535252]">Total</p>
							<span>GH30.0</span>
						</div>
						<button className="flex max-w-md mx-auto md:max-w-none font-semibold text-lg mt-7 w-full rounded-xl shadow-lg active:scale-[1.02] text-white justify-between bg-[#FC3D46] py-3 px-5 items-center gap-5">
							<p>Checkout</p>
							<span>GH{totalCartPrice}.00</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CheckoutCard;
