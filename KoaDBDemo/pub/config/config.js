const production = {

    //�������˿�
    SERVER_PORT:3000,

    //REDIS����
    REDIS:{
        host:'localhost',
        port:6379,
        password: "abcd",
        maxAge: 3600000
    },

    //MYSQL���ݿ�����
    MYSQL:{
        host:"localhost",
        user:"root",
        password:"wolaile",
        port: "8889",
        database : "nodesample",
        supportBigNumbers : true,
        multipleStatements : true,
        timezone:'utc'
    }
}

//��������
const development = {

    //�������˿�
    SERVER_PORT : 3000,

    //REDIS����
    REDIS: {
        host: 'localhost',
        port: 6379,
        password: "abcd",
        maxAge: 3600000
    },

    //MYSQL���ݿ�����
    MYSQL:{
        host: "localhost",
        user: "root",
        password: "wolaile",
        port:"8889",
        database:"nodesample",
        supportBigNumbers:true,
        multipleStatements:true,
        timezone: 'utc'
    }
}

const config = development

module.exports = config;