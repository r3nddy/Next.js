import styles from "@/styles/404.module.scss";

const Custom404 = () => {
  return (
    <div className={styles.error}>
      <img src="/404_error.png" alt="" className={styles.error__image} />
      <h1>404 | Halaman tidak ditemukan</h1>
    </div>
  );
};
export default Custom404;
