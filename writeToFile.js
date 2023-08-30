const fs = require('fs')
const writeToFile = (req , res)=>{
res.write("<html> <body> <form action='/' method='POST'> <input type='text' name='message'> <button type='submit'>Submit</button></form></body></html>")
res.end();
}
module.exports = writeToFile