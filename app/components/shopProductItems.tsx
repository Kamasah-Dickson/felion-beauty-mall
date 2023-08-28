import { Iproducts } from "../interface/ProductInterface";
import SingleShopProduct from "./SingleShopProduct";

interface IshopProduct {
	cart: Iproducts[];
	category: string;
	addItemToCart: (productItem: Iproducts) => void;
	decrementProductCount: (targetProductItem: Iproducts) => void;
}

const ShopProductItems = ({
	category,
	addItemToCart,
	cart,
	decrementProductCount,
}: IshopProduct) => {
	return (
		<SingleShopProduct
			category={category}
			addItemToCart={addItemToCart}
			cart={cart}
			decrementProductCount={decrementProductCount}
		/>
	);
};

export default ShopProductItems;
