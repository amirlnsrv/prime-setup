import { UsefulCard } from '@/ui/UsefulCard'
import styles from './UsefulArticles.module.scss'

export default function UsefulArticles() {
    return (
        <section className={styles.usefulArticles}>
            <h2>Useful articles and tips</h2>
            <p>Stay up to date with the latest news on UAE business, visas, licenses and more.</p>
            <div className={styles.bg}>
                <div className={styles.cards}>
                    <UsefulCard />
                </div>
                {/* <button>View all articles</button> */}
            </div>
        </section>
    )
}