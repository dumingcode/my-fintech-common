var Redis = require('ioredis')

class RedisConn {
    constructor(redisConfig) {
        this.redis = new Redis(redisConfig)
    }
    async redisHSet(key, field, value) {
        let result = await this.redis.hset(key, field, value)
        await this.redis.disconnect()
        return result
    }
    async redisHGet(key, field) {
        let result = await this.redis.hget(key, field)
        await this.redis.disconnect()
        return result
    }
    async redisSet(key, value) {
        let result = await this.redis.set(key, value)
        await this.redis.disconnect()
        return result
    }
    async redisGet(key) {
        let result = await this.redis.get(key)
        await this.redis.disconnect()
        return result
    }
    async redisLpush(key, value) {
        let result = await this.redis.lpush(key, value)
        await this.redis.disconnect()
        return result
    }
    async redisLindex(key, index) {
        let result = await this.redis.lindex(key, index)
        await this.redis.disconnect()
        return result
    }
    async redisLTrim(key, start, end) {
        let result = await this.redis.ltrim(key, start, end)
        await this.redis.disconnect()
        return result
    }
    async redisSadd(key, value) {
        let result = await this.redis.sadd(key, value)
        await this.redis.disconnect()
        return result
    }
    async redisSmembers(key) {
        try {
            const val = await this.redis.smembers(key)
            this.redis.disconnect()
            return val
        }
        catch (err) {
            console.log(err)
            return null
        }
    }
}

    module.exports = RedisConn