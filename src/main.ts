import path from "path";
import { loadField } from "./gtfs/jp";
import fs from "fs";

(async () => {
  const gtfsDirPath = path.join(
    process.cwd(),
    "data",
    "20220401改正_道南バス株式会社"
  );
  const filenames = fs.readdirSync(gtfsDirPath);
  for await (const filename of filenames) {
    const field = await loadField(gtfsDirPath, filename);
    console.log(filename, field);
  }
})();
