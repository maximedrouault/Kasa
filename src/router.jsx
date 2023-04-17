import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Housings from "./pages/Housings/Housings";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";

export default function Router() {
  return (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/housings" element={<Housings />} />
			<Route path="/about" element={<About />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	</BrowserRouter>
  );
}