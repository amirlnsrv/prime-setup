'use client'

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./AuthModal.module.scss";
import logo from "#/icons/logo.svg";
import Image from "next/image";

export default function AuthModal({visible = false}: {visible: boolean}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });

      const data = await res.json();
      console.log("Login Response:", data);

      if (res.ok) {
        router.push("/admin");
      } else {
        alert(data.message || "Incorrect username or password.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Server error. Try again later.");
    }
  };

  return (
    (visible && (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.headers}>
          <Image src={logo} alt="logo" width={44} height={44} />
          <p className={styles.title}>PRIME SETUP</p>
          <p className={styles.subtitle}>BUSINESS BEGINS HERE</p>
        </div>
        <p className={styles.authorization}>Authorization</p>
        <form className={styles.content} onSubmit={handleSubmit}>
          <div className={styles.form}>
            <label htmlFor="email">E-mail*</label>
            <input
              type="text"
              id="email"
              placeholder="ivan@mail.com"
              className={styles.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.form}>
            <label htmlFor="password">Password*</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className={styles.password}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.mors}>
            <div className={styles.checkbox}>
              <input type="checkbox" id="remember" />
              <label className={styles.remember} htmlFor="remember">
                Remember me
              </label>
            </div>
            <a href="#">Forgot password?</a>
          </div>
          <button className={styles.login} type="submit">
            Log In
          </button>
          <p className={styles.signUp}>
            No account yet? <a href="#">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
    ))
  );
}
