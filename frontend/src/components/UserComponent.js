'use client'

import { useAuth} from '@/hooks/auth'

const UserComponent = () => {
    const { user } = useAuth({ middleware: 'auth' })

    return(
        <div className="flex items-center">
            <div>
                {user?.name} =
            </div>

            <div>
                = {user?.email}
            </div>
        </div>
    )
}

export default UserComponent