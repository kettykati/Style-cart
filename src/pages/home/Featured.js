import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  {name:'Golden Stiletto Heels', price:'₹1,799', img:'https://images.unsplash.com/photo-1542060747-141765b8d5df?auto=format&fit=crop&w=600&q=80'},
  {name:'Red Summer Dress', price:'₹2,499', img:'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=600&q=80'},
  {name:'Stylish Sneakers', price:'₹1,999', img:'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80'},
  {name:'Classic Leather Jacket', price:'₹3,499', img:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80'}
];

export default function Featured(){
  return (
    <section style={{padding:'30px 0'}}>
      <h2 style={{textAlign:'center',marginBottom:18}}>Featured Products</h2>
      <div className="grid">
        {items.map((p,i)=>(
          <div className="card" key={i}>
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.price}</p>
            <div className="btns">
              <button className="btn cart" onClick={()=>alert('Item added to cart 🛒')}>Add to Cart</button>
              <button className="btn buy" onClick={()=>alert('Proceeding to checkout 💳')}>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{textAlign:'center',marginTop:18}}>
        <Link to="/products" className="btn" style={{background:'#232f3e',color:'#fff',padding:'8px 12px',borderRadius:6}}>View All Products</Link>
      </div>
    </section>
  );
}
