const Koa = require("koa");
const Router = require("koa-router");
const koaBody = require("koa-body");
const cors = require("koa2-cors");

const app = new Koa();
const router = new Router();

const ENV = "kdljflskjf";

//跨域以及设置头
cors({
  origin: function (ctx) {
    if (ctx.url === "/test") {
      return false;
    }
    return "*";
  },
  exposeHeaders: ["WWW-Authenticate", "Server-Authorization"],
  maxAge: 5,
  credentials: true,
  allowMethods: ["GET", "POST", "DELETE"],
  allowHeaders: ["Content-Type", "Authorization", "Accept"],
});

//接收post请求参数解析
app.use(
  koaBody({
    multipart: true,
  })
);


//全局中间件
app.use(async (ctx, next) => {
  console.log("全局中间件");
  ctx.state.ENV = ENV;
  await next();
});

const somethingList = require("./routers/somethingList");
router.use("/somethingList", somethingList.routes());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(4000, () => {
  console.log("4000端口服务已经打开");
});
