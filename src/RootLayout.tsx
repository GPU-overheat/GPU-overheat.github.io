import { Outlet } from "react-router";
import Navbar from "./components/NavBar.tsx";
import FooBar from "./components/FooBar.tsx";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="max-w-4xl mx-auto p-4 flex-grow flex flex-col justify-center">
        <Outlet />
      </main>
      <FooBar />
    </div>
  );
}