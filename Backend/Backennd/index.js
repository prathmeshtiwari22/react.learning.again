
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/products', (req, res) => {
  const products = [
    { id: 1, name: "Wooden Table", price: 200, image: "https://example.com/images/wooden-table.jpg" },
    { id: 2, name: "Office Chair", price: 150, image: "https://example.com/images/office-chair.jpg" },
    { id: 3, name: "Bookshelf", price: 120, image: "https://example.com/images/bookshelf.jpg" },
    { id: 4, name: "Sofa Set", price: 850, image: "https://example.com/images/sofa-set.jpg" },
    { id: 5, name: "Dining Table", price: 600, image: "https://example.com/images/dining-table.jpg" },
    { id: 6, name: "Study Desk", price: 250, image: "https://example.com/images/study-desk.jpg" },
    { id: 7, name: "Bed Frame", price: 700, image: "https://example.com/images/bed-frame.jpg" },
    { id: 8, name: "Night Lamp", price: 60, image: "https://example.com/images/night-lamp.jpg" },
    { id: 9, name: "Wall Clock", price: 45, image: "https://example.com/images/wall-clock.jpg" },
    { id: 10, name: "Curtains", price: 80, image: "https://example.com/images/curtains.jpg" }
  ];

  // ✅ Check if a 'search' query parameter was provided
  if (req.query.search) {
    const keyword = req.query.search.toLowerCase(); // make search case-insensitive
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(keyword)
    );

    return res.json(filteredProducts); // return filtered results immediately
  }

  // ✅ Simulate delay for full product list
  setTimeout(() => {
    res.json(products);
  }, 3000);
});

app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
});
