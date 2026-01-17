const errorHandlerMiddleWare = (err, req, res, next) => {
    console.log(err);
    res.status(err.status).json({ error: err.message })
}


module.exports = errorHandlerMiddleWare;