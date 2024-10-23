import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";


export function middleware(req) {
    const token = req.headers.get("Authorization");

    if (!token) {
        return new Response("Unauthorized", { status: 401 });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return NextResponse.next();
    } catch (error) {
        return NextResponse.json({ message: "Token is not valid" }, { status: 401 });
    }
}

export const config = {
    matcher: ['/protected-route']
}