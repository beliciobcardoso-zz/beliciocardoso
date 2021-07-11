import { useContext } from 'react'
import AuthContext from '../contexts/AuthContext';

const userAuth = () => useContext(AuthContext);

export default userAuth;