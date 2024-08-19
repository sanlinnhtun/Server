import express, { Request, Response } from 'express';
import fs from 'fs';

const app = express();
const PORT = 3000;
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  const data = fs.readFileSync('appData.json');
  res.send(data);
});

app.post('/', (req: Request, res: Response) => {
  const data = req.body;
  fs.writeFileSync('appData.json', JSON.stringify(data));
  res.send('Save file');
});

app.put('/', (req: Request, res: Response) => {
  res.send(`This is ${req.method}`);
});

app.delete('/', (req: Request, res: Response) => {
  res.send(`This is ${req.method}`);
});

app.listen(PORT, () => console.log(`Server is listen on ${PORT}`));
