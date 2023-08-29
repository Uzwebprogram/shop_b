import "reflect-metadata"
import { DataSource } from "typeorm"
import { FormEntity } from "./entities/forma"
import { UslugyEntity } from "./entities/uslugy"
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "j8M*.a:gQwyV5G",
    database: "shop_b", 
    synchronize: true,
    logging: false,
    entities: [FormEntity , UslugyEntity],
    migrations: [],
    subscribers: [],
})
