import mongoose from 'mongoose'

const connectDB = async () => {
  try{
    await mongoose.connect(process.env.MONGO_URI);
    const connection= mongoose.connection;

    connection.on('connected',()=>{
        console.log("MongoDb connected succesfully")
    })

    connection.on('error' ,(err)=>{
        console.log("Connection error" +err)
        process.exit();
    })

  } catch(error){
    console.log("something goes wrong")
    console.log(error)
  }
}

export default connectDB