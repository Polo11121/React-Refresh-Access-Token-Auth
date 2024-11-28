import { useAuth } from "hooks/useAuth";
import { axiosInstance } from "api/axios";

export const useLogout = () => {
  const { resetAuth } = useAuth();

  const logout = async () => {
    resetAuth();

    try {
      await axiosInstance("/logout", {
        withCredentials: true,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return logout;
};
