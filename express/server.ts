import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;
app.get('/', (req: Request, res: Response) => {
  console.log("Hello I'm get method!!");
});

app.listen(PORT, () => console.log(`Server is listen on ${PORT}`));
