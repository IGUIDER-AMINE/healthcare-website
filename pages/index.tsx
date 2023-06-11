import Banner from "@/components/Banner";
import Care from "@/components/Care";
import ClientQsts from "@/components/ClientQsts";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import OurApp from "@/components/OurApp";
import OurDoctors from "@/components/OurDoctors";
import OurFeatures from "@/components/OurFeatures";
import Testimonials from "@/components/Testimonials";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>healthcare-website</title>
        <meta name="description" content="healthcare-website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main className="w-full overflow-hidden flex flex-col gap-24 justify-between text-[16px] font-bodyFont bg-white text-textLight  ">
        {/* <main className="w-full container mx-auto text-[16px] h-screen font-bodyFont bg-white text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60"> */}
        {/* <NavBar /> */}
        {/* <Banner /> */}
        <OurFeatures />
        {/* <OurDoctors />
        <Care /> */}
        {/*
        {/* <ClientQsts />
        <Testimonials /> */}
        {/* <OurApp />
        <Footer /> */}
      </main>
    </>
  );
}
