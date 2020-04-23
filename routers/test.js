const Router = require("koa-router");
const { deepCopyResult } = require("../test");
const router = new Router();

router.get("/deepCopy", async (ctx, next) => {
  ctx.body = {
    code:2000,
    data:{
      deepCopyResult
    }
  }
});

module.exports = router
