import express, { Request, Response, json } from 'express';
import fs from 'fs';

const app = express();
const PORT = 3000;

app.use(express.json());
// app.use(express.text());
// app.use([express.json(), express.text()]);

app.get('/', (req: Request, res: Response) => {
  const data = fs.readFileSync('appData.json');
  res.json(data.toString());
});

//New data create by express
app.post('/', (req: Request, res: Response) => {
  const data = req.body;
  fs.writeFileSync('appData.json', JSON.stringify(data));
  res.send('Saved file!');
});

app.put('/', (req: Request, res: Response) => {
  const data = req.body;
  const existingData = JSON.parse(fs.readFileSync('appData.json').toString());
  const newData = [...existingData, data];
  fs.writeFileSync('appData.json', JSON.stringify(newData));
  console.log('>>>>', existingData);
  res.send(`Received: ${req.method}`);
});

app.delete('/', (req: Request, res: Response) => {
  // const url = req.url;
  // const query = req.query;
  const { name } = req.query;
  const fileName = name as string;
  fs.unlink(fileName, (error) => {
    console.log(error);
    res.send(`Received: ${req.method}`);
  });

  // console.log("I'm URL>>>>>", url);
  // console.log("I'm parameters>>>", query.age);
});

app.listen(PORT, () => console.log(`Server is listen on ${PORT}`));
