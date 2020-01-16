

const node_env = () => {
    let argv = process.argv;
    for (let i = 0; i < argv.length; i++) {
        if (argv[i].indexOf('NODE_ENV') !== -1) {
            let _env = argv[i].split('=')[1];
            return _env;
        }
    }
    return 'testing';
}


const development = {
    NODE_ENV: "development",
    URL : 'http://localhost',
    PORT: 4050,
    JWT_SECRET_KEY: "You are being watched.",
    TOKEN: 'xxx-dev',

    DB_HOST: 'www.db4free.net',
    DB_NAME: 'spidynegan',
    DB_USER: 'spidynegan',
    DB_PASSWORD: 'z6e@JmSW2NeqepS',
    DB_PORT: 3306
}

const production = {

    NODE_ENV: "production",
    // URL : 'http://localhost',
    PORT: 80,
    JWT_SECRET_KEY: "You are being watched.",
    TOKEN: 'xxx-dev',

    DB_HOST: 'www.db4free.net',
    DB_NAME: 'spidynegan',
    DB_USER: 'spidynegan',
    DB_PASSWORD: 'z6e@JmSW2NeqepS',
    DB_PORT: 3306
}



if (node_env().toLowerCase() === 'production') {
    console.log('[PRODUCTION]');
    module.exports = production;

} else if(node_env().toLowerCase() === 'testing'){
    console.log('[TESTING]');
    module.exports = testing;

}else {
    console.log('[DEVELOPMENT]');
    module.exports = development;
}

