import { useQuery } from 'react-query';

const useSupplier = () => {

    const { data: suppliers, isLoadingSupplier, refetch } = useQuery(['suppliers'], () =>
        fetch('http://localhost:5000/api/v1/supplier')
            .then(res => res.json()),
        {
            select: (data) => data && data.supplier,
        }
    )

    return { isLoadingSupplier, suppliers, refetch }

};

export default useSupplier;