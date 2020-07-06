import React from 'react';

function Header(){
    return (
        <header>
        <nav>
          <img src="https://i.pinimg.com/originals/2b/79/51/2b7951ca3923b28a9e77518b19d1ea46.png" />
          <input type="text" placeholder="Perquise Aqui" />
          <div>
            <i className="material-icons">account_circle</i>
            <span>Meu perfil</span>
          </div>
        </nav>
      </header>
    );
}

export default Header;