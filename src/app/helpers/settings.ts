import { environment } from 'src/environments/environment';
import { URL } from '../types/settings';

export const getBaseUrl = (): URL => environment.baseUrl;
