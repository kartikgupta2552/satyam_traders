const mysql = require('mysql2')

const pool = mysql.createPool({
    host : 'localhost',
    user : 'D2_89337_Kartik',
    password : 'Mangal2552m@ng@l',
    database : 'satyam_traders'
})

module.exports = pool