export interface Community {
	id: string,
	name: string,
	description: string
}
export interface User {
	id: string,
	name: string,
	email: string,
	token: string,
	phoneNumber?: string,
	description?: string,
	address?: string,
	profilePicture?: string,
	socialMediaLinks?: JSON
}