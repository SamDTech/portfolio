import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 sm:px-20 md:px-32">
        <div className="h-full col-span-12 p-4 dark:shadow-custom-dark shadow-custom-light  text-base text-center bg-white lg:col-span-3 dark:bg-dark-500 rounded-2xl">
          <Sidebar />
        </div>
        <div className="flex flex-col dark:shadow-custom-dark shadow-custom-light  col-span-12 overflow-hidden bg-white lg:col-span-9 rounded-2xl dark:bg-dark-500">
          <Navbar />

          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
