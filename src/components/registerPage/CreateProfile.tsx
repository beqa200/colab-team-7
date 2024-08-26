import React, { useState } from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import { stack as Menu } from 'react-burger-menu'
import Choose from './Choose'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage' 
import './CreateProfile.css';

const CreateProfile: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState<'choose' | 'signIn' | 'signUp'>('choose');

  const handleMenuToggle = (state: { isOpen: boolean }) => {
    setIsOpen(state.isOpen);
  };

  const handleSelect = (choice: 'signIn' | 'signUp') => {
    setSelectedComponent(choice);
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'signIn':
        return <LoginPage />;
      case 'signUp':
        return <RegisterPage />;
      default:
        return <Choose onSelect={handleSelect} />;
    }
  };

  return (
    <>
      <nav>
        <div>
          <ul>
            <a href="#">
              <Hamburger
                label="Show menu"
                toggled={isOpen}
                toggle={setIsOpen}
                size={30}
                color="#ffffff"
              />
            </a>
          </ul>
        </div>
      </nav>
      <Menu right isOpen={isOpen} onStateChange={handleMenuToggle}>
      {renderComponent()}
    </Menu>
    </>
  );
};

export default CreateProfile;
