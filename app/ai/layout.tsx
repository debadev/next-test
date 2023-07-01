import Sidebar from "@/components/Sidebar";
import React from "react";
import "../globals.css";
import { Inter } from "next/font/google";

export default function AIAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="h-screen w-screen p-6">
        <div className="flex">
          <Sidebar />
          <div className="side-div bg-gray-200 w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
