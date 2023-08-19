import { createContext, useState, SetStateAction, Dispatch } from "react";
import { Icart, Iproducts } from "../interface/ProductInterface";

interface storeContext {
	setCart: Dispatch<SetStateAction<Icart[]>>;
	removeItemFromCart: (productItem: Iproducts) => void;
	addItemToCart: (productItem: Iproducts) => void;
	cart: Iproducts[];
}

export const ProductContext = createContext<storeContext>({
	cart: [],
	setCart: () => {},
	removeItemFromCart: () => {},
	addItemToCart: () => {},
});

const AppContext = ({ children }: { children: React.ReactElement }) => {
	const [cart, setCart] = useState<Icart[]>([]);

	const removeItemFromCart = (productItem: Iproducts) => {
		setCart((prev) => prev.filter((product) => product.id !== productItem.id));
	};

	const addItemToCart = (newProductItem: Iproducts) => {
		const findProductInCart = cart.find(
			(product) => product.id === newProductItem.id
		);
		if (findProductInCart) {
			setCart((prev) =>
				prev.map((product) => {
					if (product.id !== findProductInCart.id) {
						return { ...newProductItem, numberOfItem: 1 };
					} else {
						return { ...product, numberOfItem: product.numberOfItem + 1 };
					}
				})
			);
		} else {
			setCart((prev) => [...prev, { ...newProductItem, numberOfItem: +1 }]);
		}
	};

	return (
		<ProductContext.Provider
			value={{ cart, setCart, removeItemFromCart, addItemToCart }}
		>
			{children}
		</ProductContext.Provider>
	);
};

export default AppContext;
