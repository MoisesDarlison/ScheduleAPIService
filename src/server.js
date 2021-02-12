const express = require('express');
const app = express();
const port = process.env.PORT || 3335

app.listen(port, () => console.log(`Listen in port ${port}`))