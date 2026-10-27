const express = require('express');
const cors = require('cors');
const pdfRouter = require('./routes/pdfMake.route');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth/admin', pdfRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});