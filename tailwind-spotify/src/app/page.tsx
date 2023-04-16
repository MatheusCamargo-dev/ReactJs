import Aside from "@/components/AsideBar";
import Footer from "@/components/Footer";
import Main from "@/components/Main";

export default function Home() {

  return(

    <div className="h-screen flex flex-col font-cera">
      <div className="flex flex-1">
        <Aside></Aside>
        <Main></Main>
      </div>
      <Footer></Footer>
    </div>
  )
}
