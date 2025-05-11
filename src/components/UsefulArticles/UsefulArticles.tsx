import { UsefulCard } from '@/ui/UsefulCard'
import styles from './UsefulArticles.module.scss'
import { RedButton } from '@/ui/RedButton'

export default function UsefulArticles() {
    const howManyCards = [1, 2, 3]
    return (
        <section className={styles.usefulArticles}>
            <h2>Useful articles and tips</h2>
            <p>Stay up to date with the latest news on UAE business, visas, licenses and more.</p>
            <div className={styles.bg}>
                <div className={styles.cards}>
                    {howManyCards.map((_, index) => (
                        <UsefulCard key={index} />
                    ))}
                </div>
                <RedButton value={'View all articles'} className={styles.btn}/>
            </div>
        </section>
    )
}