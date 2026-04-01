const express = require('express');
const cors = require('cors');

// const authRoutes = require('./routes/authRoutes');
const recordHomeownerRoutes = require('./routes/recordhomeownerRoutes');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/admin/recordhomeowner', recordHomeownerRoutes);

// app.use('/api/auth', authRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});