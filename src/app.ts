import http, { IncomingMessage, ServerResponse } from "http";
import fs from "fs";

type Routes = {
  index: string;
  mainJs: string;
  stylesCss: string;
  jpg: string;
};

const routes: Routes = {
  index: "/",
  mainJs: "/dist/js/main.js",
  stylesCss: "/dist/css/styles.css",
  jpg: "/public/pexels-karolina-grabowska-4210852.jpg",
};

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    if (req.url === routes.index) {
      res.writeHead(200, { "Content-Type": "text/html" });
      const file: Buffer = fs.readFileSync("./src/public/index.html");
      res.write(file);
      res.end();
    } else if (req.url === routes.mainJs) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      const file: Buffer = fs.readFileSync("./dist/js/main.js");
      res.write(file);
      res.end();
    } else if (req.url === routes.stylesCss) {
      res.writeHead(200, { "Content-Type": "text/css" });
      const file: Buffer = fs.readFileSync("./dist/css/styles.css");
      res.write(file);
      res.end();
    } else if (req.url === routes.jpg) {
      res.writeHead(200, { "Content-Type": "image/jpg" });
      const image = "pexels-karolina-grabowska-4210852.jpg";
      const file: Buffer = fs.readFileSync(`./src/public/${image}`);
      res.write(file);
      res.end();
    }
  }
);

const port = 8000;
server.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});
