'use client'

import axios from '@/lib/axios'
import useSWR from 'swr'

export const DisplayFruit = () => {
    const { data: fruits } = useSWR('/api/fruits', () =>
        axios
            .get('/api/fruits')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !=409) throw error
            }),
)

return (
    <div className='text-center'>
                        <div>
                            Your fruits
                        </div>
                        <div className='space-y-3'>
                            {fruits?.map((fruit, index) => (
                                <div
                                    key={index} 
                                    className="flex text-pretty flex-col rounded-full bg-blue-300"
                                >
                                    <div>{fruit.name}</div>
                                </div>
                                ))}
                            {/* <pre>{JSON.stringify(response.fruits.name, null, 2)}</pre> */}
                        </div>
                    </div>
    )
}

export default DisplayFruit