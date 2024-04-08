import mongoose from 'mongoose'

const connectDB = async () => {
  try{
    await mongoose.connect("mongodb://localhost:27017/newApp");
    const connection= mongoose.connection;

    connection.on('connected',()=>{
        console.log("MongoDb connected succesfully")
    })

    connection.on('error' ,(err)=>{
        console.log("Connection error" +err)
        process.exit();
    })

  } catch(error){
    console.log("something goes wrong while connecting to DB")
    console.log(error)
  }
}

export default connectDB