"use server"

import { revalidatePath } from "next/cache"

import Question from "@/database/question.model"
import User from "@/database/user.model"

import { connectToDatabase } from "../mongoose"
import {
  CreateUserParams,
  DeleteUserParams,
  GetAllUsersParams,
  UpdateUserParams,
} from "./shared.types"

export const createUser = async (userData: CreateUserParams) => {
  try {
    connectToDatabase()

    const newUser = await User.create(userData)

    return newUser
  } catch (error) {
    console.error("Error connecting to MongoDB", error)
  }
}

export const getUserById = async (obj: { userId: string }) => {
  return { _id: "1" }
}

export const getAllUser = async (params: GetAllUsersParams) => {
  try {
    connectToDatabase()

    // const {page = 1, pageSize = 20, filter, searchQuery} = params

    const users = await User.find({}).sort({ createdAt: -1 })

    return { users }
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const updateUser = async (userData: UpdateUserParams) => {
  try {
    connectToDatabase()

    const { clerkId, updateData, path } = userData

    await User.findOneAndUpdate({ clerkId }, updateData, { new: true })
    const newUser = await User.create(userData)

    revalidatePath(path)
  } catch (error) {
    console.error("Error connecting to MongoDB", error)
  }
}

export const deleteUser = async (userData: DeleteUserParams) => {
  try {
    connectToDatabase()

    const { clerkId } = userData

    const user = await User.findOneAndDelete({ clerkId })

    if (!user) {
      throw new Error("User not found")
    }

    const userQuestionIds = await Question.find({ author: user._id }).distinct(
      "_id"
    )

    await Question.deleteMany({ author: user._id })

    const deletedUser = await User.deleteMany(user._id)

    return deleteUser
  } catch (error) {
    console.error("Error connecting to MongoDB", error)
  }
}
