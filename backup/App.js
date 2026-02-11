import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BooksInfo from "./pages/BooksInfo";


export default function App() {
  const [books] = useState(booksData);
  const [cart, setCart] = useState([]);

return (
	<Router>
		<div className="App">
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/books" element={<Books books={books} />} />
				  {/* <Route path="/books" element={() => <Books books=
				  {books} />} /> */}
				<Route path="/books/:id" element={<BooksInfo books={books}
				addToCart={addToCart} cart={cart} />} />
				<Route path="/cart" element={<Cart books={books} cart={cart}
				changeQuantity={changeQuantity} />} />

			</Routes>
		</div>
	</Router>
);
