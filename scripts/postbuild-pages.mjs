import { copyFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const source = path.join(dist, "index.html");
const routes = ["equicube", "ueber-uns", "kontakt", "impressum"];

await Promise.all(
  routes.map(async (route) => {
    const targetDirectory = path.join(dist, route);
    await mkdir(targetDirectory, { recursive: true });
    await copyFile(source, path.join(targetDirectory, "index.html"));
  }),
);
