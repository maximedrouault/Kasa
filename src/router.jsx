import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Housing from "./pages/Housing/Housing";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";

export default function Router() {
  return (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/housing/:id" element={<Housing />} />
			<Route path="/about" element={<About />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	</BrowserRouter>
  );
}