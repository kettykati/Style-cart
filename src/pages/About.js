import React from 'react';
export default function About(){
  return (
    <div className="container" style={{padding:'40px 0'}}>
      <h2 style={{textAlign:'center',marginBottom:18}}>About StyleCart</h2>
      <p style={{maxWidth:800,margin:'0 auto',lineHeight:1.6}}>
        StyleCart is a demo online fashion store built with React. This project demonstrates
        component-based UI, React Router for navigation, and responsive design using CSS.
        It was created by Kirtan Jaiswal as a practical submission.
      </p>
    </div>
  );
}
