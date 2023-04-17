import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function App ({ children }) {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}