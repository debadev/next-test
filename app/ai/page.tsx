import Sidebar from "@/components/Sidebar";

export default function Page() {
  return (
    <div className="container mx-auto">
      {/* 
      <nav className="flex flex-col justify-center h-screen w-40 bg-gray-800">
        <a
          href="#"
          className="text-white text-xl font-bold p-4 hover:bg-gray-700"
        >
          Home
        </a>
        <a
          href="#"
          className="text-white text-xl font-bold p-4 hover:bg-gray-700"
        >
          About
        </a>
        <a
          href="#"
          className="text-white text-xl font-bold p-4 hover:bg-gray-700"
        >
          Services
        </a>
        <a
          href="#"
          className="text-white text-xl font-bold p-4 hover:bg-gray-700"
        >
          Contact
        </a>
      </nav>
       */}
       <Sidebar/>
    </div>
  );
}
