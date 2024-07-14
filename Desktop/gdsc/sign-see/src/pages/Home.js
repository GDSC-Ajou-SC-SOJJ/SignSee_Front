import React from 'react'
import { ReactComponent as Logo } from './../assets/images/logo.svg'
import { ReactComponent as HomeImg } from './../assets/images/homeImg.svg'
import { ReactComponent as GLogo } from './../assets/images/google-logo.svg'
import './../styles/Home.css'
import { nationSvgObj } from "./../components/data/nation"


const Home = () => {
  return (
    <div>

      <header className='header'>
        <Logo className='logo' style={{ marginBottom: 0 }} />
        <h3 style={{ color: 'white', marginBottom: 0 }}>
          No Language Barrier</h3>
        <h3 style={{ color: 'white', marginTop: '0' }}>
          For Everyone</h3>
      </header>

      <div className="nationSvg" style={{ display: 'flex', gap: '20px' }}>
        {nationSvgObj.map((nation) => (
          <div key={nation.name} style={{ textAlign: 'center' }}>
            {nation.icon()} {/* 아이콘 렌더링 */}
          </div>
        ))}
      </div>

      <div>
        <HomeImg></HomeImg>
      </div>

      <div className='button'>
        <button className="g-logo-button"> <GLogo /> </button>
        <button className="get-started-button">Get Started</button>

      </div>

    </div >
  );
};

export default Home;