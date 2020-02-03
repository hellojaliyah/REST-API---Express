
//Example of using NEXT without sending res
function log(req, res, next) => {
    console.log('Logging...')
    next();
})

function authentication(req, res, next) => {
    console.log('Authentication...')
    next()
})


module.exports = log