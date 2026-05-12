const express=require('express')
const cors=require('cors');
const app =express();
const dotenv=require('dotenv')
const mongoose=require('mongoose')

dotenv.config()
const authRoutes = require('./routes/auth');
const eventRoutes=require('./routes/events');
const bookingRoutes = require('./routes/booking');
app.use(cors())
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/bookings', bookingRoutes);
mongoose.connect(process.env.MONGOOSE_URL)
.then(()=>{
    console.log('connected to mongoDB')

})
.catch((error)=>{
    console.log("error connecting to mongodb:",error)
});

const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

