import { Document,model, models, Schema } from 'mongoose'

export interface IUser extends Document {
  clerkId: string
  name: string
  username: string
  email: string
  password?: string
  bio?: string
  picture: string
  location?: string
  portfolioWebsite?: string
  reputation?: string
  saved: Schema.Types.ObjectId[]
  joinDate: Date
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  bio: { type: String },
  picture: { type: String, required: true },
  location: { type: String },
  portfolioWebsite: { type: String },
  reputation: { type: String },
  saved: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
  joinDate: { type: Date, default: Date.now },
})

const User = models.User || model<IUser>('User', UserSchema)

export default User
