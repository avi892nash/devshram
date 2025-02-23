import React, { useSyncExternalStore } from 'react';
import selectedNavStore from '../state/external/nav';


/*
    #home
    #tools
    #works
    #about-me
    #contacts
    LanguageComponent
*/
export default function NavList(){
    const selected = useSyncExternalStore(selectedNavStore.subscribe, selectedNavStore.getSnapshot);
    const navListUI = ({id, name}: {id : string, name: string}) => {
        const isSelected = selected == id;
        return (<a key={id} href={id} className={isSelected ? 'text-foreground' : 'text-secondary'}><span className='text-primary'>#</span>{name}</a>);
    };
    const navBarList = [
        {name: "home", id: "#home"},
        {name: "tools", id: "#tools"},
        {name: "works", id: "#works"},
        {name: "about-me", id: "#about-me"},
        {name: "contacts", id: "#contacts"},
        {name: "language", id: "#language"},    
    ];
    return navBarList.map(navListUI);
}