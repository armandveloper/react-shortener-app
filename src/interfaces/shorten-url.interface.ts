export interface ShortenURLResponse {
	description: null;
	long_url: string;
	short_url: string;
	domain: string;
	short_id: string;
	user_id: number;
	team_id: number;
	expire_at_datetime: null;
	expire_at_views: null;
	public_stats: boolean;
	facebook_pixel_id: null;
	adwords_pixel_id: null;
	twitter_pixel_id: null;
	created_at: Date;
	updated_at: Date;
	user: User;
}

export interface User {
	id: number;
	name: string;
	email: string;
	photo_url: string;
	current_team_id: number;
	created_at: Date;
	updated_at: Date;
}
