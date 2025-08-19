export interface NavLink {
    title: string;
    href: string;
}

export interface NavProps {
    navLinks: NavLink[];
    lang: string;
    onLinkClick: () => void;
    socialOpen: boolean;
    setSocialOpen: (value: boolean) => void;
    languageOpen: boolean;
    setLanguageOpen: (value: boolean) => void;
}

export interface ButtonProps {
    isActive: boolean;
    toggleMenu: () => void;
    shouldShowScrolledState: boolean;
}

// Remove PerspectiveTextProps - not needed anymore