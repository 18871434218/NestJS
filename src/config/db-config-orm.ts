import { resolve } from "path";

const entity = resolve(__dirname, '../entities/**/**.entity{.ts,.js}');
const dev = process.env.NODE_ENV === 'development';

export let options = {
        type: "mysql",
        host: dev ? '10.0.16.25' : '127.0.0.1',
        port: 3306,
        username: "root",
        password: "123456",
        database: "nodesql",
        entities: [entity],
        synchronize: true
}