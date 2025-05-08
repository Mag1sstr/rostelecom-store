import LanguageContextProvider from "@/contexts/LanguageContext";
import Header from "../modules/Header/Header";
import ModalsContextProvider from "@/contexts/ModalsContext";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LanguageContextProvider>
        <ModalsContextProvider>
          <Header />
          {children}
        </ModalsContextProvider>
      </LanguageContextProvider>
    </>
  );
}

export default Layout;
