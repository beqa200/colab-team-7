import React, { useState } from 'react';
import './Choose.css';

interface ChooseProps {
    onSelect: (choice: 'signIn' | 'signUp') => void;
}

const Choose: React.FC<ChooseProps> = ({ onSelect }) => {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = (choice: 'signIn' | 'signUp') => {
        if (isAnimating) return; // Prevent multiple clicks

        setIsAnimating(true);

        // Wait for the animation to end
        setTimeout(() => {
            onSelect(choice);
            setIsAnimating(false); // Reset animation state
        }, 300); // Match this time to the CSS animation duration
    };

    return (
        <div className="button-container">
            <button
                className={isAnimating ? 'animating' : ''}
                onClick={() => handleClick('signIn')}
            >
                <span>Sign In</span>
            </button>
            <button
                className={isAnimating ? 'animating' : ''}
                onClick={() => handleClick('signUp')}
            >
                <span>Sign Up</span>
            </button>
        </div>
    );
}

export default Choose;
