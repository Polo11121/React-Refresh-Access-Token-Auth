import { axiosInstance } from "api/axios";
import { useAuth } from "hooks/useAuth";

export const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axiosInstance.get("/refresh", {
      withCredentials: true,
    });

    setAuth((prev) => ({
      ...prev,
      roles: response.data.roles,
      accessToken: response.data.accessToken,
    }));

    return response.data.accessToken;
  };

  return refresh;
};
