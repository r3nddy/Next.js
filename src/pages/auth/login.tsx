import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./login.module.css";

const LoginPage = () => {
  const { push } = useRouter();
  const handlerlogin = () => {
    push("/product");
  };

  return (
    <div className={styles.login}>
      <h1>Login Page</h1>
      <button onClick={handlerlogin}>login</button>
      <p>
        Belum punya akun? Registrasi <Link href={"/auth/register"}>disini</Link>
      </p>
    </div>
  );
};

export default LoginPage;
