var uploads=require("../js/uploadImg.js")


module.exports=function (app) {
    app.post("/uploads",uploads)
}