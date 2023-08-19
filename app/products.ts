import { Iproducts } from "./interface/ProductInterface";
import wigImage1 from "../public/assets/wigs/christmasImage.svg";
import wigImage2 from "../public/assets/wigs/christmasImage.svg";
import wigImage4 from "../public/assets/wigs/Wig name is Audre_ 😍.svg";
import nails1 from "../public/assets/nails/Acrylic Nails.svg";
import nails3 from "../public/assets/nails/nails2.svg";
import nails8 from "../public/assets/nails/download2.svg";

export const products: Iproducts[] = [
	{
		id: "kjd342e8r9",
		productImage: nails1,
		productName: "Accrelic Nails1",
		category: "nails",
		new: true,
		discount: 40,
		description:
			"Buy the accrelic nails at an affordable price and enjoy a free discount",
		price: 20,
	},

	{
		id: "kji4fdfr9j",
		productImage: nails3,
		productName: "Accrelic Nails1",
		category: "nails",
		new: true,
		discount: 40,
		description:
			"Buy the accrelic nails at an affordable price and enjoy a free discount",
		price: 20,
	},

	{
		id: "kji4fsd33esdjr2e8r9",
		productImage: nails8,
		productName: "Accrelic Nails1",
		category: "nails",
		new: false,
		discount: 40,
		description:
			"Buy the accrelic nails at an affordable price and enjoy a free discount",
		price: 20,
	},

	{
		id: "kji4euk8r9",
		productImage: wigImage1,
		productName: "Wig1",
		category: "wigs",
		new: false,
		discount: 40,
		description:
			"Buy the accrelic nails at an affordable price and enjoy a free discount",
		price: 20,
	},
	{
		id: "skdf2uku343ff",
		productImage: wigImage2,
		productName: "Wig2",
		category: "wigs",
		new: false,
		discount: 40,
		description:
			"Buy the accrelic nails at an affordable price and enjoy a free discount",
		price: 20,
	},

	{
		id: "skdf3swfdsfsff",
		productImage: wigImage4,
		productName: "Wig4",
		category: "wigs",
		new: true,
		discount: 40,
		description:
			"Buy the accrelic nails at an affordable price and enjoy a free discount",
		price: 20,
	},
];
