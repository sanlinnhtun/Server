import http, { IncomingMessage, ServerResponse } from 'http';
import fs from 'fs';
import { Menu, MenuCategories } from './type';

const PORT = 3000;

const menus: Menu[] = [];
const menuCategories: MenuCategories[] = [];

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
      const data = fs.readFileSync('index.html');
      res.write(data);
      res.end();
    } else if (url === '/script.js') {
      const data = fs.readFileSync('script.js');
      res.write(data);
      res.end();
    } else if (url === '/menu') {
      switch (method) {
        case 'GET':
          res.write(JSON.stringify(menus));
          res.end();
          break;
        case 'POST':
          let data = '';
          req.on('data', (chunk) => {
            data += chunk;
          });
          req.on('end', () => {
            const menu = JSON.parse(data);
            menus.push(menu);
            res.write(JSON.stringify(menus));
            console.log('####', menu);
            res.end();
          });
          break;
        case 'PUT':
          break;
        case 'DELETE':
          break;
      }
    } else if (url === '/menu-categories') {
    }
  }
);

server.listen(PORT, () => console.log(`Server is listen on ${PORT}`));
