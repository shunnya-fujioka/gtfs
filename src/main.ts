import path from "path";
import fs from "fs";
import { parse } from "csv-parse";
import { Agency } from "./types/jp/GTFS-JP";

(() => {
  const csvFilePath = path.join(
    process.cwd(),
    "data",
    "20220401改正_道南バス株式会社",
    "agency.txt"
  );

  const fileContent = fs.readFileSync(csvFilePath, { encoding: "utf-8" });

  parse(
    fileContent,
    {
      delimiter: ",",
    },
    (error, result: Agency[]) => {
      if (error) {
        console.error(error);
      }
      console.log("Result", result);
    }
  );
})();
