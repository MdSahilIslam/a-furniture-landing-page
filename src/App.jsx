import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import FurnitureContextProvider from "./store/store";

function App() {
  return (
    <>
      <FurnitureContextProvider>
        <Navbar />
        <main className="min-h-screen dark:bg-black">
          <Outlet />
        </main>
        <Footer></Footer>
      </FurnitureContextProvider>
    </>
  );
}

export default App;
