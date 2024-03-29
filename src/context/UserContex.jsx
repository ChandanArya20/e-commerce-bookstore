import { createContext, useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";

//create user context
export const UserContext = createContext();

const UserContextProvider = ({ children }) => {

	const [currentUser, setCurrentUser] = useState(null);
	const { setCart, refreshAllCartItems } = useContext(CartContext);

	//to make user logged in
	const loginUser = (userData, next) => {
		localStorage.setItem("userData", JSON.stringify(userData));
		refreshAllCartItems();
		setCurrentUser(userData);
		next();
	};

	
	//check if user is logged in
	const isUserLoggedin = () => {

		let data = localStorage.getItem("userData");

		if (data != null){
			return true;
		}else{
			return false;
		}
	};


	//make user logged out
	const logoutUser = (next) => {

		localStorage.removeItem("userData");
		setCurrentUser(null);
		setCart([]);
		next();
	};


	//return current user details having partial user data
	const getCurrentUserDetails = () => {

		if (isUserLoggedin()) {
			const userData = localStorage.getItem("userData");
			const parsedUserData = JSON.parse(userData);
			return parsedUserData;
		} else {
			return null;
		}
	};

	useEffect(() => {
		setCurrentUser(getCurrentUserDetails());
	}, []);

	return (
		<UserContext.Provider
			value={{ currentUser, loginUser, logoutUser, isUserLoggedin, getCurrentUserDetails }}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
