import Footer from "@/components/ui/shared/footer";
import Header from "@/components/ui/shared/header"
 

export default function RootLayout({ children }) {
    return (
     <div>
        <Header></Header>
        <body >{children}</body>
        <Footer></Footer>
        </div>>
    );
  