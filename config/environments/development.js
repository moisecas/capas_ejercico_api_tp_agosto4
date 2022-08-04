module.exports = {
    PORT: process.env.PORT,
    DB:{
        user:"postgres",
        password: "postgres",
        host: "localhost",
        database: "postgres_dev", //conexión a base de datos de desarrollo 
        dialect: "postgres", //postgres, mysql, sqlite, mssql ...

    }
}