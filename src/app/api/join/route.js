import User from "@/models/user";
import connectDB from "@/utils/db"
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';

export async function POST(req) {
    try {
        const { name, email, phone, password } = await req.json();
        
        await connectDB();

        const hashedPassword = bcrypt.hashSync(password, 10);

        const user = await User.create({
            name,
            email,
            phone,
            password: hashedPassword
        });

        console.log('User created', user);
        return NextResponse.json({ message: 'User created successfully' });

    } catch (error) {
        console.error('Error creating user:', error)
        return NextResponse.json({ message: error.message }); 
    }
}