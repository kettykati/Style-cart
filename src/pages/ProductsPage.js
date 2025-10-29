import React from 'react';

const products = [
  {name:'Denim Jacket', price:'₹1,299', img:'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80'},
  {name:'Leather Shoes', price:'₹2,499', img:'https://images.unsplash.com/photo-1508908325620-1f73f54e9c56?auto=format&fit=crop&w=800&q=80'},
  {name:'Summer Dress', price:'₹999', img:'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80'},
  {name:'Smart Watch', price:'₹3,499', img:'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=80'}
];

export default function ProductsPage(){
  return (
    <div className="container" style={{padding:'40px 0'}}>
      <h2 style={{textAlign:'center',marginBottom:18}}>All Products</h2>
      <div className="grid">
        {products.map((p,i)=>(
          <div className="card" key={i}>
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.price}</p>
            <div className="btns">
              <button className="btn cart" onClick={()=>alert('Added to cart')}>Add to Cart</button>
              <button className="btn buy" onClick={()=>alert('Checkout')}>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
