import netlifyIdentity from "netlify-identity-widget";

export const auth = netlifyIdentity;

export function init(callback) {
	netlifyIdentity.on("init", (user) => {
		callback(user);
	});
	netlifyIdentity.init();
}

export function logIn(callback) {
	netlifyIdentity.open();
	netlifyIdentity.on("init", (user) => {
		callback(user);
		netlifyIdentity.close();
	});
}

export function logOut(callback) {
	netlifyIdentity.logout();
	netlifyIdentity.on("logout", (user) => {
		callback(user);
	});
}

const netlifyAuth = {
	isAuthenticated: false,
	user: null,
	initialize(callback) {
		window.netlifyIdentity = netlifyIdentity;
		netlifyIdentity.on("init", (user) => {
			callback(user);
		});
		netlifyIdentity.init();
	},
	authenticate(callback) {
		this.isAuthenticated = true;
		netlifyIdentity.open();
		netlifyIdentity.on("login", (user) => {
			this.user = user;
			callback(user);
			netlifyIdentity.close();
		});
	},
	signout(callback) {
		this.isAuthenticated = false;
		netlifyIdentity.logout();
		netlifyIdentity.on("logout", () => {
			this.user = null;
			callback();
		});
	},
};

export default netlifyAuth;
