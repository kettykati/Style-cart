import React from 'react';

const cats = [
  {name:'Men', img:'https://images.unsplash.com/photo-1551232864-3f0890e580d4?auto=format&fit=crop&w=800&q=80'},
  {name:'Women', img:'https://images.unsplash.com/photo-1520975918318-3e9b1cc6a4a0?auto=format&fit=crop&w=800&q=80'},
  {name:'Footwear', img:'https://images.unsplash.com/photo-1600180758890-6a186b2b6c92?auto=format&fit=crop&w=800&q=80'},
  {name:'Accessories', img:'https://images.unsplash.com/photo-1618354691373-d851c3e1b6f9?auto=format&fit=crop&w=800&q=80'}
];

export default function Categories(){
  return (
    <section style={{padding:'40px 0'}}>
      <h2 style={{textAlign:'center',marginBottom:18}}>Shop by Category</h2>
      <div className="grid">
        {cats.map((c,i)=>(
          <div className="card" key={i}>
            <img src={c.img} alt={c.name} />
            <h3 style={{padding:'10px 16px'}}>{c.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
