import styles from './Button.module.css';

const Button = ({ label, onClick, variant = 'primary' }) => {
  return (
    <button 
      className={`${styles.btn} ${styles[variant]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
