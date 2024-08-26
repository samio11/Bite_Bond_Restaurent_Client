import { useContext } from "react";
import { ContextProvider } from "../../AllContext/ContextApi";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useRole = () => {
    const { user, loading } = useContext(ContextProvider)
    const { data: role, isLoading } = useQuery({
        queryKey: ['role'],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const { data } = await axios(`${import.meta.env.VITE_SERVER_URL}/user/${user?.email}`)
            return data.role
        }
    })
    return [role, isLoading]
}

export default useRole;