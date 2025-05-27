import styles from "./ServiceCard.module.scss";
import { motion } from "framer-motion";

export function ServiceCard({
  selectedIndex,
  services,
}: {
  selectedIndex: number;
  services: { title: string; content: string }[];
}) {

  const cubeAnimations = [
    {
      cube1: { x: 0, y: 0 },
      cube2: { x: 0, y: 0 },
      cube3: { x: 0, y: 0 },
      cube4: { x: 0, y: 0 },
    },
    {
      cube1: { x: 0, y: 50, scale: 0.8 },
      cube2: { x: 0, y: 100, scale: 1.4 },
      cube3: { x: -120, y: -50, scale: 0.8 },
      cube4: { x: -80, y: -20, scale: 0.9 },
    },
    {
      cube1: { x: 100, y: 30, scale: 0.8 },
      cube2: { x: 100, y: -100, scale: 1.4 },
      cube3: { x: -230, y: -20 },
      cube4: { x: -220, y: -50 },
    },
    {
      cube1: { x: 180, y: 100, scale: 0.8 },
      cube2: { x: 160, y: -150, scale: 1.4 },
      cube3: { x: -280, y: 50 },
      cube4: { x: -250, y: -100, scale: 0.8 },
    },
    {
      cube1: { x: 200, y: 200, scale: 0.5 },
      cube2: { x: 350, y: -150, scale: 1.4 },
      cube3: { x: -460, y: 70, scale: 1.8 },
      cube4: { x: -300, y: -280, scale: 0.8 },
    },
    {
      cube1: { x: 200, y: 330, scale: 0.5 },
      cube2: { x: 410, y: -30, scale: 1.5 },
      cube3: { x: -570, y: -50, scale: 1.8 },
      cube4: { x: -250, y: -400, scale: 0.8 },
    },
    {
      cube1: { x: 60, y: 470, scale: 0.8 },
      cube2: { x: 520, y: 150, scale: 1 },
      cube3: { x: -500, y: -230, scale: 1.5 },
      cube4: { x: -100, y: -550, scale: 0.8 },
    },
    {
      cube1: { x: -100, y: 630, scale: 0.7 },
      cube2: { x: 300, y: 250, scale: 1.4 },
      cube3: { x: -400, y: -400, scale: 1.4 },
      cube4: { x: 50, y: -590, scale: 0.6 },
    },
  ];
  return (
    <div className={styles.contentPanel}>
      <motion.div
        id={styles.cube}
        className={styles.cube1}
        initial={{ opacity: 0 }}
        animate={{
          ...cubeAnimations[selectedIndex].cube1,
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      />
      <motion.div
        id={styles.cube}
        className={styles.cube2}
        initial={{ opacity: 0 }}
        animate={{
          ...cubeAnimations[selectedIndex].cube2,
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      />
      <motion.div
        id={styles.cube}
        className={styles.cube3}
        initial={{ opacity: 0 }}
        animate={{
          ...cubeAnimations[selectedIndex].cube3,
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      />
      <motion.div
        id={styles.cube}
        className={styles.cube4}
        initial={{ opacity: 0 }}
        animate={{
          ...cubeAnimations[selectedIndex].cube4,
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      />
      <h2>
        <span>{selectedIndex + 1}. </span>
        {services[selectedIndex].title}
      </h2>
      <p>{services[selectedIndex].content}</p>
    </div>
  );
}
