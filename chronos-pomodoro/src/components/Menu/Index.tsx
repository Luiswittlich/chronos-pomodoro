import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon, } from 'lucide-react'
import styles from './styles.module.css'
import { useState, useEffect } from 'react'

type AvailableThemes = 'dark' | 'light' 

export function Menu(){
    const[theme, setTheme] = useState<AvailableThemes>(()=> {
        const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark'
        return storageTheme
    })

    const nextThemeIcon = {
        dark:<SunIcon/>,
        light:<MoonIcon/>
    };

    function handleThemeChange(event:React.MouseEvent<HTMLAnchorElement, MouseEvent>){
      event.preventDefault(); //Não segue  o link
      setTheme(prevTheme => {
        const nextTheme = prevTheme === 'dark'?'light':'dark' //Verifica o tema e altera
        return nextTheme;
      })
    }

    useEffect(()=>{
        document.documentElement.setAttribute('data-theme',theme)
        localStorage.setItem('theme', theme)
    },[theme]); //Executa apenas quando o valor de theme muda

    return (
        <nav className={styles.menu}>
            <a className={styles.menuLink} 
            href="#" 
            aria-label='Ir para a Home' 
            title='Ir para a Home'
            >
                <HouseIcon/> 
            </a>
            <a className={styles.menuLink} 
            href="#"
            aria-label='Ver Historico' 
            title='Ver Historico'
            >
                <HistoryIcon/> 
            </a>
            <a className={styles.menuLink} 
            href="#"
            aria-label='Ir para página de Configurações' 
            title='Ir para a Configurações'
            >
                <SettingsIcon/> 
            </a>
            <a className={styles.menuLink} 
            href="#"
            aria-label='Mudar Tema' 
            title='Mudar Tema'
            onClick={handleThemeChange}
            >
                {nextThemeIcon[theme]} 
            </a>
        </nav>)
}