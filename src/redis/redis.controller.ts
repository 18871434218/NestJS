import { Get, Controller, Param, Post, Body, Response } from '@nestjs/common';
import { RedisSerice } from './redis.service';
import { redisUser } from '../Class/redis-user';

@Controller('redis')
export class RedisController {
    constructor(private redisSerice: RedisSerice) {}
    
    @Post('set')
    async set(@Body() user: redisUser) {
        return this.redisSerice.set(user.key, user.name);
    }
    
    @Post('get')
    async get(@Body() user: redisUser) {
        let data = await this.redisSerice.get(user.key);
        console.log(data);
        return data;
    }
}