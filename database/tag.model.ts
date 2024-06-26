import { Document,model, models, Schema } from 'mongoose'

export interface ITag extends Document {
  name: string
  description: string
  questions: Schema.Types.ObjectId[]
  followers: Schema.Types.ObjectId[]
  createdDate: Date
}

const TagSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
  follower: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  createdDate: { type: Date, default: Date.now },
})

const Tag = models.Tag || model<ITag>('Tag', TagSchema)

export default Tag
