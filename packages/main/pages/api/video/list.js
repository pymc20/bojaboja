import {dbAll} from "sqlite"

export default async (req, res) => {
    const data = await dbAll("SELECT rowid AS id, info FROM lorem")
    res.status(200).json(data)
}
