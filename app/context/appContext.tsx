"use client";
import {
	createContext,
	useState,
	SetStateAction,
	Dispatch,
	useEffect,
} from "react";
import { Iproducts } from "../interface/ProductInterface";
interface storeContext {
	setCart: Dispatch<SetStateAction<Icart[]>>;
	removeItemFromCart: (productItem: Iproducts) => void;
	decrementProductCount: (targetProductItem: Iproducts) => void;
	addItemToCart: (productItem: Iproducts) => void;
	cart: Iproducts[];
}

interface Icart extends Iproducts {
	numberOfItem: number;
}

export const ProductContext = createContext<storeContext>({
	cart: [],
	setCart: () => {},
	removeItemFromCart: () => {},
	addItemToCart: () => {},
	decrementProductCount: () => {},
});

const AppContext = ({ children }: { children: React.ReactElement }) => {
	const [cart, setCart] = useState<Icart[]>([]);

	const removeItemFromCart = (productItem: Iproducts) => {
		cart.filter((product) => product.id !== productItem.id);
	};

	const addItemToCart = (newProductItem: Iproducts) => {
		const checkProductIsInCart = cart.find(
			(product) => product?.id === newProductItem.id
		);

		if (!checkProductIsInCart) {
			setCart((prev) => [...prev, { ...newProductItem, numberOfItem: 1 }]);
		} else {
			setCart((prev) =>
				prev.map((product) => {
					if (product?.id === checkProductIsInCart.id) {
						return {
							...checkProductIsInCart,
							numberOfItem: checkProductIsInCart.numberOfItem + 1,
						};
					}
					return product;
				})
			);
		}
	};

	const decrementProductCount = (targetProductItem: Iproducts) => {
		const findThatProduct = cart.find(
			(product) => product.id === targetProductItem.id
		);

		if (findThatProduct) {
			setCart((prev) =>
				prev
					.map((product) => {
						if (product.id === findThatProduct.id) {
							return {
								...findThatProduct,
								numberOfItem: Math.max(findThatProduct.numberOfItem - 1, 0),
							};
						}

						return product;
					})
					.filter((product) => product.numberOfItem > 0)
			);
		}
	};

	useEffect(() => {
		console.log(cart);
	}, [cart]);

	return (
		<ProductContext.Provider
			value={{
				cart,
				setCart,
				removeItemFromCart,
				addItemToCart,
				decrementProductCount,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};

export default AppContext;
