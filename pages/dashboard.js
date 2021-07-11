import userAuth from '../hooks/userAuth';

function Dashboard() {
    const { user } = userAuth();
    return (
        <div>
            <h1>Dashboard</h1>
            <div>
                <img src={user?.photoURL} width="50" />
                <h2>{user?.displayName}</h2>
            </div>
            <p>Texto teste</p>
        </div>
    );
}

export default Dashboard;
