import React from 'react';

interface HeaderProps {
  onCreateList: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCreateList }) => {
  return (
    <header className="header">
      <h1>🌸 Ma To-Do List</h1>
      <button className="create-list" onClick={onCreateList}>
        ➕ Créer une liste
      </button>
    </header>
  );
};

export default Header;
