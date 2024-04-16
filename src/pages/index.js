import Navbar from "./Components/Navbar";
import Head from "next/head";
import Banner from "./Components/Banner";
import localFont from "next/font/local";

const newFont = localFont({
  src: "./Components/mangueiraalt-alt.otf",
  variable: '--new-font',
});


export default function Home() {
  return (
    <div className={`${newFont.variable} font-sans`}>
      <Head>
        <title>Color Picker</title>
      </Head>
      <Navbar/>
      <Banner/>
    </div>
  );
}
