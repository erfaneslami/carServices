import Styles from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={Styles.body}>
      <div className={Styles.demo}>
        <div className={Styles.circle}>
          <div className={Styles.inner}></div>
        </div>
        <div className={Styles.circle}>
          <div className={Styles.inner}></div>
        </div>
        <div className={Styles.circle}>
          <div className={Styles.inner}></div>
        </div>
        <div className={Styles.circle}>
          <div className={Styles.inner}></div>
        </div>
        <div className={Styles.circle}>
          <div className={Styles.inner}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
