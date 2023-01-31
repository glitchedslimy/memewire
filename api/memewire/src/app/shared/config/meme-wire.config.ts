export interface MemeWireConfig {
    env: string;
    isDev: boolean;
    globalPrefix: string;
    defaultVersion: string;
    logger: {
        loggerLevel: string;
        color: boolean;
        oneLineStack: boolean;
    }
    swagger: {
        title: string;
        description: string;
        version: string
    }
}