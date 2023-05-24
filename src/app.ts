import http, { IncomingMessage, ServerResponse } from "http";
import { readFileSync } from "fs";

// type Routes = {
//   index: string;
//   mainJs: string;
//   stylesCss: string;
//   jpg: string;
// };

/**
 * index signature
 */
interface Routes {
  [index: string]: string;
}

const routes: Routes = {
  index: "/",
  mainJs: "/dist/js/main.js",
  stylesCss: "/dist/css/styles.css",
  jpg: "/public/pexels-karolina-grabowska-4210852.jpg",
};

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const { url } = req;
    const { index, mainJs, stylesCss, jpg } = routes;
    if (url === index) {
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      const file: Buffer = readFileSync("./src/public/index.html");
      res.write(file);
      res.end();
    } else if (url === mainJs) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      const file: Buffer = readFileSync("./dist/js/main.js");
      res.write(file);
      res.end();
    } else if (url === stylesCss) {
      res.writeHead(200, { "Content-Type": "text/css" });
      const file: Buffer = readFileSync("./dist/css/styles.css");
      res.write(file);
      res.end();
    } else if (url === jpg) {
      res.writeHead(200, { "Content-Type": "image/jpg" });
      const image = "pexels-karolina-grabowska-4210852.jpg";
      const file: Buffer = readFileSync(`./src/public/${image}`);
      res.write(file);
      res.end();
    }
  }
);

const port = 8000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
