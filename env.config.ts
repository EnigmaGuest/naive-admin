type ServiceEnvConfig = Record<ServiceEnvType, ServiceUrlConfig>;


/** 请求服务的环境配置 */
const serviceEnv: ServiceEnvConfig = {
    dev: {
        url: "http://192.168.110.6:8787/api/v1/client"
    },
    test: {
        url: "http://localhost:12200"
    },
    prod: {
        url: 'http://localhost:12200'
    }
}

/**
 * 获取当前环境模式下的请求服务的配置
 * @param env 环境
 */
export function getServiceEnvConfig(env: ImportMetaEnv): ServiceUrlProxyConfig {
    const {VITE_SERVICE_ENV = 'dev'} = env;
    const config = serviceEnv[VITE_SERVICE_ENV];
    return {
        ...config,
        proxy: '/api'
    };
}