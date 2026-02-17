function Products({ view }) {

  const products = [
    { id: 1, name: "iPhone 15", price: 80000, image: "https://images.unsplash.com/photo-1703434123142-1b41a1b1055b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aXBob25lJTIwMTV8ZW58MHx8MHx8fDA%3D", description: "Latest Apple smartphone",discount: "20% OFF",
    features: ["128GB Storage", "48MP Camera", "A16 Chip"] },
    { id: 2, name: "Samsung Galaxy S24", price: 75000, image: "https://images.unsplash.com/photo-1706372124814-417e2f0c3fe0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Ftc3VuZyUyMHMyNHxlbnwwfHwwfHx8MA%3D%3D", description: "Flagship Samsung phone",discount: "30% OFF", },
    { id: 3, name: "OnePlus 12", price: 65000, image: "https://images.unsplash.com/photo-1637190909375-85cd40d14161?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b25lcGx1cyUyMDEyJTIwbW9iaWxlfGVufDB8fDB8fHww", description: "Fast performance mobile",discount: "40% OFF", },
    { id: 4, name: "Laptop", price: 60000, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3DcJHrrHSgvFpsYxqb6g97uaQTd2kE31rPUeDZTeDsjVq", description: "High performance laptop",discount: "25% OFF", },
    { id: 5, name: "Smart Watch", price: 12000, image: "https://images.unsplash.com/photo-1660844817855-3ecc7ef21f12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnR3YXRjaHxlbnwwfHwwfHx8MA%3D%3D", description: "Fitness tracking smartwatch",discount: "15% OFF", },
    { id: 6, name: "Headphones", price: 5000, image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D", description: "Noise cancelling headphones",discount: "10% OFF", },
    { id: 7, name: "Bluetooth Speaker", price: 3000, image: "https://images.unsplash.com/photo-1529359744902-86b2ab9edaea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D", description: "Portable speaker",discount: "10% OFF", },
    { id: 8, name: "Tablet", price: 25000, image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFibGV0fGVufDB8fDB8fHww", description: "Large screen tablet",discount: "25% OFF", },
    { id: 9, name: "Camera", price: 45000, image: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3DcJHrrHSgvFpsYxqb6g97uaQTd2kE31rPUeDZTeDsjVq", description: "HD digital camera",discount: "40% OFF", },
    { id: 10, name: "Gaming Mouse", price: 2000, image: "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nJTIwbW91c2V8ZW58MHx8MHx8fDA%3D", description: "High precision mouse",discount: "10% OFF", }
  ];

  return (
    <div className={view === "grid" ? "grid-view" : "list-view"}>
      {products.map((item) => (
        <div key={item.id} className="product-card">
          <img src={item.image} alt={item.name} />
            <div className="product-info">
            {/* discount irundha mattum show agum */}
            {item.discount && (
            <span className="discount">{item.discount}</span>
            )}
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>₹{item.price}</p>

    {/* features irundha mattum show agum */}
    {/* {item.features && (
        <ul className="features">
        {item.features.map((feature, index) => (
            <li key={index}>{feature}</li>
        ))}
        </ul>
    )} */}

    <span className="wishlist">♡</span>

    </div>

        </div>
      ))}
    </div>
  );
}

export default Products;
