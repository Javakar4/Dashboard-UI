const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Job = require('./models/Job'); // Import the model


const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors()); // Allow requests from frontend origin
app.use(express.json()); // Parse JSON body



// MongoDB connection
mongoose.connect('mongodb://localhost:27017/dashboardDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// In-memory storage (for demo)
const jobs = [];

// POST route to receive job details
// POST route
app.post('/api/jobs', async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json({ message: 'Job saved to MongoDB', job });
  } catch (error) {
    console.error('❌ Error saving job:', error);
    res.status(500).json({ error: 'Failed to save job' });
  }
});


// GET all jobs
app.get('/api/jobs', async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
