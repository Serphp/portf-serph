import { QueryClient } from "react-query"

export const hygraph = new QueryClient(import.meta.env.HYGRAPH_API_KEY)
