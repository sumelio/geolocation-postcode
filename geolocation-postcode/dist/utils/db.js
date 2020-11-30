"use strict";
/* istanbul ignore file */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongodb_memory_server_1 = require("mongodb-memory-server");
const config_1 = require("../config");
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.set('debug', process.env.DEBUG !== undefined);
const mongoUrlDefault = `mongodb://${config_1.POSTCODE_MONGO_USER}:${config_1.POSTCODE_MONGO_PASSWORD}@${config_1.POSTCODE_MONGO_HOSTS_PORT}`;
const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAlive: true,
    useCreateIndex: true,
    keepAliveInitialDelay: 300000,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000 // Close sockets after 45 seconds of inactivity
};
class MongoConnection {
    static getInstance() {
        if (!MongoConnection._instance) {
            MongoConnection._instance = new MongoConnection();
        }
        return MongoConnection._instance;
    }
    open({ mongoUrl = mongoUrlDefault }) {
        return __awaiter(this, void 0, void 0, function* () {
            this.mongoUrl = mongoUrl;
            try {
                if (mongoUrl === 'inmemory') {
                    console.debug('connecting to inmemory mongo db');
                    this._mongoServer = new mongodb_memory_server_1.MongoMemoryServer();
                    const mongoUrlServer = yield this._mongoServer.getConnectionString();
                    yield mongoose_1.default.connect(mongoUrlServer, opts);
                }
                else {
                    console.debug('connecting to mongo db...' + mongoUrl);
                    mongoose_1.default.connect(mongoUrl, opts);
                }
                mongoose_1.default.connection.on('connected', () => {
                    console.info('Mongo: connected');
                });
                mongoose_1.default.connection.on('disconnected', () => {
                    console.error('Mongo: disconnected');
                });
                mongoose_1.default.connection.on('error', (err) => {
                    console.error(`Mongo:  ${String(err)}`);
                    if (err.name === "MongoNetworkError") {
                        setTimeout(() => {
                            mongoose_1.default.connect(mongoUrl, opts).catch((errors) => { console.error(errors); });
                        }, 5000);
                    }
                });
            }
            catch (err) {
                console.error(`db.open: ${err}`);
                throw err;
            }
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield mongoose_1.default.disconnect();
                if (this.mongoUrl === 'inmemory') {
                    yield this._mongoServer.stop();
                }
            }
            catch (err) {
                console.error(`db.open: ${err}`);
                throw err;
            }
        });
    }
}
exports.default = MongoConnection.getInstance();
//# sourceMappingURL=db.js.map