import { useQuery } from 'react-query';

const useCategory = () => {

    const { data: categories, isLoading, refetch } = useQuery(['categories'], () =>
        fetch('http://localhost:5000/api/v1/category')
            .then(res => res.json()),
        {
            select: (data) => data && data.category,
        }
    )

    return { isLoading, categories, refetch }
};

export default useCategory;