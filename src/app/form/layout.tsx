import FileContextProvider from "@/context/FileContext";
import Nav from "./components/Nav";


export default function FormLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <div className="h-full pt-20 pb-5 flex flex-col justify-between bg-[#FFF]">
        <Nav />
        <FileContextProvider>
           {children}
        </FileContextProvider>  
        </div>    
    </>

  );
}
