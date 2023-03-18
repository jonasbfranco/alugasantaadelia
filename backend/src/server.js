const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 3333;
const HOST = process.env.HOST || '0.0.0.0'

app.listen(PORT, HOST, () => console.log(`Server running in http://localhost:${PORT}`));
