const Router = require("koa-router");

const router = new Router();

router.get("/list", async (ctx, next) => {

  console.log(ctx.request.query.id,999)
  //创建mysql连接池
  const sql = `select * from fruits where id = '${ctx.request.query.id}'`;
  const values = {};
  let { query } = require("../utils/dbObj");
  let res = await query(sql, values)
    .then((rows) => {
      return {
        code: 20000,
        data: rows,
      };
    })
    .catch((err) => {
      return err;
    });

  ctx.body = res;
});

module.exports = router;
