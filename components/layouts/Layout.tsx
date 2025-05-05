import LanguageContextProvider from "@/contexts/LanguageContext";
import Header from "../modules/Header/Header";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LanguageContextProvider>
        <Header />
        {children}
      </LanguageContextProvider>
    </>
  );
}

export default Layout;
