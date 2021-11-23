import { createContext, useContext, useEffect, useState } from "react";
import { auth, init, logIn as authLogin, logOut as authLogOut } from "../lib/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState();

	useEffect(() => {
		init((user) => {
			setUser(user);
		});

		auth.on("login", setUser);

		return () => {
			auth.off("login", setUser);
		};
	}, []);

	function logIn() {
		authLogin((user) => {
			setUser(user);
		});
		// console.log("Log In");
	}

	function logOut() {
		authLogOut((user) => {
			setUser(undefined);
		});
		// console.log("Log In");
	}

	const contextValue = { user, logIn, logOut };

	return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export function useAuth() {
	return useContext(AuthContext);
}
