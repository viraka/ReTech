import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { supabase } from "../utils/supabase";
import toast from "react-hot-toast";

export const PrivateRoute = () => {
	const navigate = useNavigate();

	async function handleClick() {
		try {
			const session = await supabase.auth.getSession();
			if (!session.data.session?.access_token) {
				await supabase.auth.signOut();
				toast.error("Please sign in first");
				navigate("/login");
			}
		}
		catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		handleClick();
	}, [navigate]);

	return <Outlet />;
};