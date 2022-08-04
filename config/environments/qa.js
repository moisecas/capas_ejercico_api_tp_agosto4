module.exports = {
    PORT: process.env.PORT || 5000,
    DB:{
        user:"postgres",
        password: "postgres",
        host: "localhost",
        database: "postgres_qa", //conexión a base de datos de qa
        dialect: "postgres", //postgres, mysql, sqlite, mssql ...

    }
}