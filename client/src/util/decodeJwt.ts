import jwtDecode from 'jwt-decode';
import { user } from '../types/user';

const decodeJwt = (token: string): user => jwtDecode(token);
export default decodeJwt;
