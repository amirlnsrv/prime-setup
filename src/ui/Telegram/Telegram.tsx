import Image from 'next/image'
import styles from './Telegram.module.scss'
import telegram from '../../../public/assets/icons/telegram.svg'

export default function Telegram() {
    return(
        <button className={styles.tg}>
            <Image className={styles.telegramIcon} src={telegram} alt='tg'/>
            <p>Нужна помощь? <br /> Свяжитесь с нами по чату</p>
        </button>
    )    
}