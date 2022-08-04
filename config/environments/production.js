module.exports = {
    PORT: process.env.PORT || 3000,
    DB:{
        user:"postgres",
        password: "postgres",
        host: "localhost",
        database: "postgres_prod",
        dialect: "postgres", //postgres, mysql, sqlite, mssql ...

    }
}