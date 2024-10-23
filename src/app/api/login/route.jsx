import User from "@/models/user";
import connectDB from "@/utils/db";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";


export async function POST(req) {
    try {
        const { email, password } = await req.json();
        //console.log({ email, password });

        await connectDB();

        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({ message: "Invalid credentials" }, { status: 400 });
        }

        const isMatch = await compare(password, user.password);

        if (!isMatch) {
            return NextResponse.json({ message: "Invalid credentials" }, { status: 400 });
        }

        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
            expiresIn: "300",
        });

        return NextResponse.json({ message: "Login successful", token }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: error }, { status: 200 });
    }
}