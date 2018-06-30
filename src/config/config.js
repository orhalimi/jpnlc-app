import configProd from './production';
import configDev from './dev';

const ENV_PRODUCTION = 'production';

const config = (process.env.NODE_ENV === ENV_PRODUCTION) ? configProd : configDev;

export default config;
