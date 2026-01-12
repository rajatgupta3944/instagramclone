// useLogout.js
import { signOut as fbSignOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import useAuthStore from "../store/authStore";

const useLogout = () => {
  const logoutUser = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    try {
      await fbSignOut(auth);             
      localStorage.removeItem("user-info");
      logoutUser();
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return { handleLogout };
};

export default useLogout;
