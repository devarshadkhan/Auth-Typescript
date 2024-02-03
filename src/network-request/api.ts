import { RegisterParams } from "@/utils/types";
import axiosInstance from "./axios";

export const handleRegister = async (params:RegisterParams) => {
  try {
    const response = await axiosInstance.post("auth/register", {
      email: params.email,
      password: params.password,
      fullName: params.fullName,
    });
    console.log("RESPONSE",response);
    
    return response;
  } catch (error) {
    throw error;
  }
};
