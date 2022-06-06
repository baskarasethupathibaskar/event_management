const nano = require('nano');
const url = "https://apikey-v2-msz5pn0gamsoigpftay3cndoju75rdeejvo1cd3paw0:1cd6b51776516316358ce28da3097318@97233c10-e8bd-4684-98ca-20e5eaf8dd35-bluemix.cloudant.com/";  
//username:password@endpoint 
const nanodb = nano(process.env.COUCHDB_URL || url);// connect with couchdb
const contact = nanodb.use('online_management'); // connect to database
const pay = nanodb.use('online_management'); // connect to database
const login = nanodb.use('online_management'); // connect to database
const feedback = nanodb.use('online_management'); // connect to database
module.exports={login,pay,contact,nano,feedback};