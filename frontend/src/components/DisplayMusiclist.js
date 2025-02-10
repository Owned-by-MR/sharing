'use client'

import axios from '@/lib/axios'
import useSWR from 'swr'

export const DisplayMusiclist = () => {
    const { data: musiclists } = useSWR('/api/musiclists', () =>
        axios
            .get('/api/musiclists')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !=409) throw error
            }),
)

return (
    <div className='text-center'>
                        <div>
                            Your interests:
                        </div>
                        <div className='space-y-3'>
                                {musiclists?.map((musiclist, index) => (
                                <div
                                    key={index} 
                                    className="flex flex-col rounded-full bg-blue-300"
                                >
                                    <div>Name: {musiclist.name}</div>
                                    <div>Quantity: {musiclist.quantity}</div>
                                </div>
                                ))} 
                            {/* <pre>{JSON.stringify(response.fruits.name, null, 2)}</pre> */}
                        </div>
                    </div>
    )
}

export default DisplayMusiclist