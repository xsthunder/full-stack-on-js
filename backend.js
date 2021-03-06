const Koa = require("koa");

const app =new Koa();

const Router = require('koa-router');
const router = new Router();

/**
 * COR controls for options
 */
const set_cors = (ctx, next)=>{
    ctx.set('Access-Control-Allow-Headers','Content-Type');
    ctx.set('Access-Control-Allow-Origin','*');
    ctx.set('Access-Control-Allow-Methods','POST, GET, OPTIONS, DELETE, PUT');
    ctx.set('Access-Control-Max-Age','86400');
    ctx.body = '';
    next()
};

router.use('/*', set_cors)

router.options('/*', set_cors)

// sanity check
router.get('/how-are-you', async(ctx)=>{
	ctx.good('i am fine, thank you, and you?');
});

app.context.good = function(res, msg,){
    let ans = {}
    ans['err'] = 0;
    ans['msg'] = msg;
    ans['res'] = res||{};
    this.body = ans;
};

let todos = [];

router.get('/todos',  async(ctx)=>{
    console.log('get todo', todos)
	ctx.good(todos);
});

router.post('/todos', async(ctx)=>{
	let body = ctx.request.body;
    console.log(body)
	todos = body.todos
    console.log('post todo', todos)
	ctx.good();
});


const KoaBody = require('koa-body');

app
    .use(KoaBody({
        multipart:true
    }))
    .use(router.routes());

app.listen(8088);
