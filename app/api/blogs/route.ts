import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    blogs: [
      {
        name: "Blog 1",
        id: "B101",
        author: "John Doe",
      },
      {
        name: "Blog 1",
        id: "B102",
        author: "Jane Doe",
      },
      {
        name: "Blog 3",
        id: "B103",
        author: "Johnny Dae",
      },
    ],
  };
  return NextResponse.json(data);
}
