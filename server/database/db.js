import mongoose from 'mongoose';


const connection = async () => {
   try{

      const url ='mongodb+srv://raihanhassan10:ANUBHAVLALROX@cluster0.x6htlxy.mongodb.net/?retryWrites=true&w=majority';
   
      await mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology:true});
      console.log('Database connection established');
   }catch(error){
      console.log('Error while connecting to database',error);
   }
}

export default connection;