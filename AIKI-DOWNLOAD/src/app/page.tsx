import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import DownloadCards from "@/components/DownloadCards";
import Features from "@/components/Features";
import Installation from "@/components/Installation";
import Footer from "@/components/Footer";

export default function Home() {
  return (<>
    <Nav /><main><Hero /><DownloadCards /><Features /><Installation /></main><Footer />
  </>);
}
