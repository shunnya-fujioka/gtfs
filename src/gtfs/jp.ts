import { parse } from "fast-csv";
import fs from "fs";
import path from "path";
import { FieldTypeList } from "../types/jp/GTFS-JP";

function fieldMapping<T extends FieldTypeList>(
  header: string[],
  record: T
): Partial<T> {
  const result: Partial<T> = {};
  Object.entries(record).forEach(([key, value]) => {
    if (header.includes(key) && value !== undefined) {
      result[key as keyof T] = value as T[keyof T];
    }
  });
  return result;
}

export async function loadField<T = FieldTypeList>(
  gtfsDirPath: string,
  filename: string
) {
  let field: T[] = [];
  let header: string[] = [];

  await new Promise<void>((resolve, reject) => {
    fs.createReadStream(path.join(gtfsDirPath, filename), {
      encoding: "utf8",
    })
      .pipe(parse({ headers: true }))
      .on("headers", (headers) => {
        header = headers;
      })
      .on("data", (record) => {
        field.push(fieldMapping(header, record) as T);
      })
      .on("end", () => {
        resolve();
      })
      .on("error", (error) => {
        reject(error);
      });
  });

  return field;
}
