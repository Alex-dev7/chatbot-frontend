import DataContextProvider from "@/context/DataContext";




export default function ResultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
     
        <DataContextProvider>
           {children}
        </DataContextProvider>  
 
    </>

  );
}
