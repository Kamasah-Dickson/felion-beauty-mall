import { StaticImageData } from "next/image";

export interface Iproducts {
	id: string | number;
	productName: string;
	category: string;
	productImage: StaticImageData | string;
	price: number;
	description: string;
	new: boolean;
	discount: number;
}

export interface Icart extends Iproducts {
	numberOfItem: number;
}
