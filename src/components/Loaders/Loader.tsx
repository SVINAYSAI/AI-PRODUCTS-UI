import styles from './styles.module.css'

const Loader = () => {
  return (
    <div className={styles.preloader}>
      <svg
  xmlns="http://www.w3.org/2000/svg"
  width={48}
  height={48}
  viewBox="0 0 24 24"
  style={{ fill: "rgba(0, 0, 0, 1)", transform: ""}}
>
  <path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z" />
</svg>

    </div>
  )
}
export default Loader