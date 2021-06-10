export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'

export const MAGIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || 'pk_test_6961825A5D392AF0'
 
export const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PK || 'pk_test_51HjgKgIUZ52cyQNQJyVodOuP34r5PVOPEvmOyXzjUC8ZRxgZDVLLbl4A4sARVMxPKJ0a7ULvevl4vEpo1c3KYMvf00HN4PugI4'


export const fromImageToUrl = (image) => {
	if (!image) {
		return "/vercel.svg"
	}

	if (image.url.indexOf("/") === 0){
		return `${API_URL}${image.url}`
	}

	return image.url
}