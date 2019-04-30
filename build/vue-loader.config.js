module.exports = (isDev)=>{
    return {
        preserveWhitepace:true,
        extractCSS:!isDev,
        //hotReload:false,//根据环境变量生成
        cssModules:{
            localIdentName:isDev?'[path]-[name]-[hash:base64:5]':'[hash:base64:5]',
            camelCase:true,
        }
    }
}