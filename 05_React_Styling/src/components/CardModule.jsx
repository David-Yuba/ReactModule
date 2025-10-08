import styles from "./Card.Module.css";

export default function CardModule(){
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>Naslov kartice</h2>
            <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum iusto voluptatibus eos modi autem est, magnam ea? Distinctio nihil veniam velit quae molestias quo quaerat voluptate error, incidunt illo inventore?</p>
            <button className={styles.button}>Klikni me</button>
        </div>
    )
}