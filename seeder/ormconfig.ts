module.exports = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "explium",
  password: "explium",
  database: "root",
  entities: ["src/**/*.entity{.ts,.js}"],
  seeds: ["src/seeds/**/*{.ts,.js}"],
  factories: ["src/factories/**/*{.ts,.js}"],
};
