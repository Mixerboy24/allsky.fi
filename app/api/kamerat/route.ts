import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function GET() {
  const connection = await mysql.createConnection({
    host: process.env.db_osoite,
    user: process.env.db_useri,
    password: process.env.db_salasana,
    database: process.env.db_tietokanta,
  });

  const [rows] = await connection.execute("SELECT * FROM cameras");
  await connection.end();

  return NextResponse.json(rows);
}
