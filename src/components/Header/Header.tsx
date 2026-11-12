import { useState } from 'react';
import logo from '../../assets/images/Logo.svg';
import './Header.scss';

interface NavLink {
    label: string;
    href: string;
}

const navLinks: NavLink[] = [
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Help', href: '#help' },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className='header'>
            <div className='header__inner'>
                <div className='header__logo'>
                    <img src={logo} alt='LaslesVPN' className='header__logo-img' />
                </div>

                <button
                    type='button'
                    className='header__toggle'
                    aria-expanded={isOpen}
                    aria-controls='main-nav'
                    aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    <span className='header__toggle-bar' aria-hidden='true' />
                </button>

                <nav
                    id='main-nav'
                    className={`header__nav ${isOpen ? 'header__nav--open' : ''}`}
                    aria-label='Principal'
                >
                    <ul className='header__list'>
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} onClick={closeMenu}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className='header__actions'>
                        <span className='header__auth'>Sign In</span>
                        <span className='header__auth header__auth--outline'>Sign Up</span>
                    </div>
                </nav>
            </div>
        </header>
    );
}