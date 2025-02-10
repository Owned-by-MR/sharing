'use client'

import axios from '@/lib/axios'
import useSWR from 'swr'

export const DisplaySale = () => {
    const { data: sales } = useSWR('/api/sales', () =>
        axios
            .get('/api/sales')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !=409) throw error
            }),
)

return (
    <div className='text-center'>
                        <div>
                            Your sales:
                        </div>
                        <div className='space-y-3'>
                                {sales?.map((sale, index) => (
                                <div
                                    key={index} 
                                    className="flex flex-col rounded-full bg-blue-300"
                                >
                                    <div>{sale.name}</div>
                                    <div>{sale.quantity}</div>
                                </div>
                                ))} 
                            {/* <pre>{JSON.stringify(response.fruits.name, null, 2)}</pre> */}
                        </div>
                    </div>
    )
}

export default DisplaySale