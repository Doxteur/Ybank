export const REACT_APP_VERSION = '1.0.3';


let REACT_APP_API_URL:string;

if (process.env.NODE_ENV === 'production') {
    //REACT_APP_API_URL = `${window.location.protocol}//${window.location.hostname}/api`;
    // fix specifiquement pour le tp
    REACT_APP_API_URL = 'http://92.112.192.183:7011/api';
} else {
    // Development Configuration
    const isMobileDev = process.env.REACT_APP_MOBILE_DEV === 'true';
    const devBaseUrl = isMobileDev ? 'http://192.168.56.1:6011/api' : 'http://localhost:3333/api';
    REACT_APP_API_URL = `${devBaseUrl}`;
}

export { REACT_APP_API_URL };

