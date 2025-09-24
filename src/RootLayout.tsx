import { Outlet } from "react-router";
import Navbar from "./components/NavBar.tsx";
import FooBar from "./components/FooBar.tsx";

export default function RootLayout() {
  return (
    <div className="mih-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto p-4 flex-grow h-screen">
        <Outlet />
      </main>
        <FooBar />
    </div>
  );
}
