import styles from './app.module.css';
import data from './data.json';
import { useState } from 'react';

export const App = () => {
  const [steps] = useState(data);
  const [activeIndex, setActiveIndex] = useState(0);

  const isFirstStep = activeIndex === 0;
  const isLastStep = activeIndex === steps.length - 1;

  const clickOnGoBackBtn = () => {
    if (!isFirstStep) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const clickOnGoForwardBtn = () => {
    if (isLastStep) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Инструкция по готовке пельменей</h1>
        <div className={styles.steps}>
          <div className={styles['steps-content']}>
            {steps[activeIndex].content}
          </div>
          <ul className={styles['steps-list']}>
            {steps.map(({ id, title }, index) => (
              <li key={id} className={`${styles['steps-item']} ${activeIndex === index ? styles.active : ''} ${activeIndex >= index ? styles.done : ''}`}>
                <button 
                  className={styles['steps-item-button']} 
                  onClick={() => handleClick(index)}
                >
                  {index + 1}
                </button>
                {title}
              </li>
            ))}
          </ul>
          <div className={styles['buttons-container']}>
            <button 
              className={styles.button} 
              onClick={clickOnGoBackBtn} 
              disabled={isFirstStep}
            >
              Назад
            </button>
            <button 
              className={styles.button} 
              onClick={clickOnGoForwardBtn}
            >
              {isLastStep ? 'Начать сначала' : 'Далее'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
