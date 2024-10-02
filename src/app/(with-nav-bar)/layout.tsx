import { Footer, Header } from "@components/layout";
import BottomNav from "@components/layout/BottomNav";

export default function NavigationLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white">
      {/* Include shared UI here e.g. a header or sidebar */}
      <Header />
      <div className="mt-[92px] ">{children}

         
       
      </div>



      <Footer />
      <BottomNav />
    </section>
  );
}
