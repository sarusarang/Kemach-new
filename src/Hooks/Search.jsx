import { useQuery, useQueryClient } from '@tanstack/react-query';


const SearchProducts = () => {

    const queryClient = useQueryClient();


    const { data: SearchKey, isLoading, error } = useQuery({

        queryKey: ['Search'],
        queryFn: () => {

            return "";
        },
        staleTime: Infinity,
        cacheTime: Infinity,
    })


    const updateSearch = (newUser) => {

        queryClient.setQueryData(['Search'], newUser)

    }

    return { SearchKey, isLoading, error, updateSearch }

    
}

export default SearchProducts;