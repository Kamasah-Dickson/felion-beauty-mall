import Image from "next/image";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Icart, Iproducts } from "../interface/ProductInterface";

const CartItem = ({
	cart,
	setCart,
}: {
	cart: Iproducts[];
	setCart: React.Dispatch<React.SetStateAction<Icart[]>>;
}) => {
	const handleIncrement = (targetProduct: Iproducts) => {
		const findProductToIncrement = cart.find(
			(product) => product?.id === targetProduct?.id
		);
		if (findProductToIncrement) {
			setCart((prev) =>
				prev.map((product) => {
					if (product?.id === findProductToIncrement.id) {
						return {
							...product,
							numberOfItem: product?.numberOfItem + 1,
						};
					}
					return product;
				})
			);
		}
	};

	const handleDecrement = (targetProduct: Iproducts) => {
		const findProductToDecrement = cart.find(
			(product) => product.id === targetProduct.id
		);
		if (findProductToDecrement) {
			setCart((prev) =>
				prev
					.map((product) => {
						if (product?.id === findProductToDecrement.id) {
							return {
								...product,
								numberOfItem: Math.max(product.numberOfItem - 1, 0),
							};
						}
						return product;
					})
					.filter((product) => product.numberOfItem > 0)
			);
		}
	};
	return (
		<div className="grid grid-cols-1 gap-5">
			{cart.map((product) => {
				return (
					<div
						key={product.id}
						className="bg-white w-full h-fit rounded-2xl md:rounded-none flex overflow-hidden flex-col md:flex-row md:items-center max-w-[400px] md:max-w-none shadow-md mx-auto"
					>
						<div className=" overflow-hidden">
							<Image
								className="w-full h-64 object-cover md:h-40 "
								src={product.productImage}
								width={300}
								height={300}
								alt=""
							/>
						</div>
						<div className="px-7 py-5 md:py-0 ">
							<h3 className="font-bold text-xl my-3">Accrelic Nails</h3>
							<p className="font-normal mb-3 text-[#535353]">
								Buy the accrelic nails at an affordable price
							</p>
							<div className="flex flex-col mb-3 gap-5 md:justify-between md:flex-row">
								<span className="font-bold  text-lg">GH{product.price}.00</span>
								<div>
									<div className=" flex gap-2 items-center bg-[black]  md:hover:bg-none hover:bg-[#0c0a74] transition-colors text-white font-medium md:rounded-md rounded-full text-base p-[6px] active:scale-[1.02]">
										<button
											type="button"
											onClick={() => handleDecrement(product)}
										>
											<AiOutlineMinus color="white" size={20} />
										</button>

										<p className=" border-l border-l-[#ffffff71]  border-r-[#ffffff71] px-2 border-r">
											{product.numberOfItem}
										</p>
										<button
											type="button"
											onClick={() => handleIncrement(product)}
										>
											<AiOutlinePlus color="white" size={20} />
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default CartItem;
