"use client";
import { products } from "../products";
import Image from "next/image";
import { useContext } from "react";
import { ProductContext } from "../context/appContext";
import { Icart } from "../interface/ProductInterface";

const FeaturedProducts = ({ category }: { category: string }) => {
	const { addItemToCart, cart } = useContext(ProductContext);

	return products
		.filter((product) => {
			if (category === "all") {
				return product;
			} else {
				return product.category === category;
			}
		})
		.slice(0, 3)

		.map((product) => {
			const cartItem = cart.find(
				(cartItem) => cartItem.id === product.id
			) as Icart;
			const numberOfItem = cartItem ? cartItem.numberOfItem : 0;
			return (
				<div
					key={product.id}
					className={` rounded-[30px] overflow-hidden shadow-lg md:max-w-sm  ${
						product.new &&
						"border-2 shadow-lg shadow-[#6456e756] overflow-hidden relative border-[#6456e7] "
					} text-black mx-auto`}
				>
					{product.new && (
						<div className="absolute top-0 right-0 text-white bg-[#6456e7] py-2 text-sm rounded-bl-xl rounded-tr-[20px] font-black px-5 w-fit">
							New
						</div>
					)}
					<div className="bg-transparent w-full h-60">
						<Image
							alt={product.description}
							src={product.productImage}
							height={300}
							width={300}
							className="w-full select-none rounded-t-[24px] h-full object-cover"
						></Image>
					</div>
					<div className=" bg-white py-5 px-7 text-left">
						<h3 className="font-black text-3xl mb-3">{product.productName}</h3>
						<span className="font-normal text-lg text-[#494949]">
							{product.description}
						</span>
						<div className="flex mt-3 flex-wrap lg:items-center justify-between gap-5">
							<span className="font-black text-3xl lg:text-4xl text-[#6948c5]">
								GH{product.price + 80}.00
							</span>
							<button
								onClick={() => addItemToCart(product)}
								className="bg-black relative w-full md:w-fit hover:bg-[#1f1e1e] transition-colors text-white font-medium rounded-full text-base  px-3 md:px-5 py-3"
								type="button"
							>
								Add To Cart
								<div className="absolute -top-3 p-2 grid place-content-center font-bold rounded-full w-7 h-7 right-1 bg-[#6456e7]">
									{numberOfItem}
								</div>
							</button>
						</div>
					</div>
				</div>
			);
		});
};

export default FeaturedProducts;
