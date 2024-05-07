import styles from './page.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <nav className={styles.header}>
          <div className={styles.container}>
            <div>
              <Image
                src={'/logoWhite.png'}
                alt="logo"
                width={132}
                height={20}
              />
            </div>
            <ul className={styles.list}>
              <li>
                <a href="#about">QUEM SOMOS</a>
              </li>
              <li>
                <a href="#services">SERVIÇOS</a>
              </li>
              <li>
                <a href="#clients">CLIENTES</a>
              </li>
              <li>
                <a className={styles.contact} href="#contact">
                  CONTATO
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </main>
  )
}
