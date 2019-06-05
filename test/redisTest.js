const RedisConn = require('../lib/redis/redisConn')
const config = require('../config/config')
var should = require('should')

describe('Redis', function() {
    describe('#redisHGet()', function() {
        it('redisHGet 002363', async function() {
          const redisConn =   new RedisConn(config.redis)
          const data = await redisConn.redisHGet(config.redisStoreKey.yearLowStockSet , '002363')
          const jsonObj = JSON.parse(data)
          jsonObj.should.have.property('code', '002363')
        })
      })
      describe('#redisHSet()', function() {
        it('redisHSet test', async function() {
          const  redisConn =   new RedisConn(config.redis)
          const data = await redisConn.redisHSet(config.redisStoreKey.yearLowStockSet , 'test', 'ok')
          data.should.be.Number().equal(0)
        })
      })
      describe('#redisSmembers()', function() {
        it('redisSmembers test', async function() {
          const  redisConn =   new RedisConn(config.redis)
          const data = await redisConn.redisSmembers(config.redisStoreKey.citic2V)
          data.should.be.an.Array()
        })
      })
  })