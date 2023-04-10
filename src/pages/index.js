import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";

export default function Home() {
  return (
    <>
      <Head>
        <title>Conv0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}
