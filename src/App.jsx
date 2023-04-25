import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function App ({ children }) {
  return (
    <>
    <div className="layout-container">
      <Header />
      <main>
        {children}
      </main>
    </div>
      <Footer />
    </>
  );
}