import { Module} from '@nestjs/common';
import { RedisModule} from 'nestjs-redis';
import { redisOptions } from '../config/redis-config';
import { RedisController } from './redis.controller';
import { RedisSerice } from './redis.service';

@Module({
    imports: [RedisModule.register(redisOptions)],
    providers: [ RedisSerice ],
    controllers: [ RedisController ]
})

export class Redismodule {}