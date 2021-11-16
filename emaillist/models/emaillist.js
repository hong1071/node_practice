const mysql = require('mysql2');
const dbconn = require('./dbconn');
const util = require('util');

module.exports = {
    findAll: async function(callback){
        const conn = dbconn();
        /*
        이걸 이해해보자
        const query = function(sql, data){
            return new Promise(function(resolve, reject){
                conn.query(sql, [], function(error, results, fields){
                    return error ? reject(error) : resolve(results);
                })
            })
        }
        */

        // const query = (sql, data) => new Promise((resolve, reject) => conn.query(sql, [], (error, results, fields) => error ? reject(error) : resolve(results)))
        const query = util.promisify(conn.query).bind(conn);

        try{
            return await query(
                'select no, first_name, last_name, email from email_list order by no desc', 
                []
            );
        } catch(err){
            console.error(err);
        } finally{
            conn.end();
        }
    },
    insert: async function(emaillist){
        const conn = dbconn();
        const query = util.promisify(conn.query).bind(conn);
        try{
            return await query(
                'insert into email_list(first_name, last_name, email) values(?, ?, ?)', 
                Object.values(emaillist)
            );
        } catch(err){
            console.error(err);
        } finally{
            conn.end();
        }
    }
}