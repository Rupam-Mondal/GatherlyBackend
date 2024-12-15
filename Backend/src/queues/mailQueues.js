import Queue from 'bull';
import { redis_host, redis_port } from '../config/serverconfig.js';

export default new Queue('mailQueue' , {
    redis:{
        host:  redis_host,
        port: redis_port
    }
});