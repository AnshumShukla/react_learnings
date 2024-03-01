import 'bootstrap/dist/css/bootstrap.css';
import styles from './App.module.css';
import Display from './components/display';

function App() {
  return <div className={styles.calculator}>
   <Display/>
    <div className= {styles.button}>
   <button className={styles.btn}>c</button>
   <button className={styles.btn}>c</button>
   <button className={styles.btn}>c</button>
   {/* <button className={styles.btn}>c</button> */}
   
    </div>
    </div>
}

export default App
