import React, { useState } from 'react';
import styles from '../styles/TabsMobile.module.css';
import { useQuizContext } from '../store/QuizContext';

const Tabs = () => {
    const { changeLang,curLang } = useQuizContext();
  
    const handleLangChange = (e) => {
      const selectedValue = e.target.value;
      changeLang(selectedValue);
    };

    return (
        <div className={styles.containerr}>
            <div className={styles.tabs}>
                <input 
                    type="radio" 
                    id="radio-1" 
                    name="tabs" 
                    value="English"
                    checked={curLang === 'English'}
                    onChange={handleLangChange} 
                />
                <label className={styles.tab} htmlFor="radio-1">
                    English
                </label>
                <input 
                    type="radio" 
                    id="radio-2" 
                    name="tabs" 
                    value="Hindi"
                    checked={curLang === 'Hindi'}
                    onChange={handleLangChange} 
                />
                <label className={styles.tab} htmlFor="radio-2">Hindi</label>
                <input 
                    type="radio" 
                    id="radio-3" 
                    name="tabs" 
                    value="Gujarati"
                    checked={curLang === 'Gujarati'}
                    onChange={handleLangChange} 
                />
                <label className={styles.tab} htmlFor="radio-3">Gujarati</label>
                <span className={styles.glider}></span>
            </div>
        </div>
    );
};

export default Tabs;
