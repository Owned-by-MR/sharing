// import Header from '@/app/(appearance)/Header'
// import UserComponent from '@/components/UserComponent'
import DisplayFruit from '@/components/DisplayFruit'
import DisplayMusiclist from '@/components/DisplayMusiclist'
import DisplaySale from '@/components/DisplaySale'



export const metadata = {
    title: 'Laravel - Dashboard',
}

const Dashboard = () => {
    return (

        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-lg sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                        <DisplayMusiclist />
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-lg sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                        <DisplaySale />
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-lg sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                        <DisplayFruit />
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Dashboard