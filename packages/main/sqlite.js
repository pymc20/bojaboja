// @flow
import sqlite3 from "sqlite3"
import path from "path"

const connDB = () => {
    const sqlite = sqlite3.verbose();
    return new sqlite.Database(path.join(process.cwd(), "public/db/data.db"));
}

export const dbAll = (query: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        const db = connDB()
        db.all(query, (err, row) => {
            if(err) {
                reject("FAIL")
            }
            resolve(row)
        });
        db.close();
    })
}

export const dbGet = (query: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        const db = connDB()
        db.get(query, (err, row) => {
            if(err) {
                reject("FAIL")
            }
            resolve(row)
        });
        db.close();
    })
}

export const dbRun = (query: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        const db = connDB()
        db.run(query, (err, row) => {
            if(err) {
                reject("FAIL")
            }
            resolve("SUCCESS")
        });
        db.close();
    })
}