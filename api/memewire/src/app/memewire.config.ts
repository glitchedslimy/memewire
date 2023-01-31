import * as convict from 'convict';
import { MemeWireConfig } from './shared/config/meme-wire.config'

const config: convict.Config<MemeWireConfig> = convict({
    env: {
        doc: 'The application environment',
        format: ["production", "develop", "development", "test", "default"],
        default: 'default',
        env: "NODE_ENV",
        nullable: false
    },
    isDev: {
        doc: "Is this a development environment?",
        format: Boolean,
        default: true,
        env: "IS_DEV",
        nullable: false
    },
    globalPrefix: {
        doc: "Prefix used by the API",
        format: String,
        default: "api",
        nullable: false
    },
    defaultVersion: {
        doc: 'Application default version',
        format: String,
        default: '1',
        nullable: false
    },
    swagger: {
        title: {
            doc: "Title of the Swagger Application",
            format: String,
            default: "MemeWire Swagger API",
            env: "SWAGGER_TITLE"
        },
        description: {
            doc: "Description of the Swagger Application",
            format: String,
            default: "The meme API for everyone.",
            env: "SWAGGER_DESCRIPTION"
        },
        version: {
            doc: 'Swagger documentation version',
            default: '0.0.1',
            format: String,
            env: "SWAGGER_VERSION"
        }
    }
})

config.validate({ allowed: 'strict' });
const MEMEWIRE_CONFIG: MemeWireConfig = config.getProperties();
export default MEMEWIRE_CONFIG;