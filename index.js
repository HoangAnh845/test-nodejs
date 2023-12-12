const express = require('express');
/* CONFIGURATION */
const app = express();



app.listen(8080, () => console.log('Sever running on port', `http://localhost:${8080}/`));