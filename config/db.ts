import { connect, set } from "mongoose";

export const connectDB = async () => {
  try {
    set("strictQuery", false);
    const conn = await connect(process.env.MONGODB_URI);
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};
