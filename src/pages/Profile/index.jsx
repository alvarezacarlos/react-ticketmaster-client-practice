import { Outlet, useNavigate, useLocation} from 'react-router-dom'

import './Profile.css'

const Profile = () => {

    const navigate = useNavigate()

    const { pathname } = useLocation();

    const handleOnClick = (path) => {
        navigate(`/profile${path ? '/' + path : ''}`)
    }

    return (
        <div className="profile-container">
            <div className='side-menu'>
                <div className={`liked-events ${pathname === '/profile' ? 'active' : ''}`} onClick={() => handleOnClick('')}>Liked Events</div>
                <div className={`my-info ${pathname.includes('my-info') ? 'active' : ''}`} onClick={() => handleOnClick('my-info')}>My Information</div>
            </div>
            <div className='outlet'>
                <Outlet />
            </div>
        </div>
    )
}

export default Profile