import 'bootstrap/dist/css/bootstrap.css';
import styles from './App.module.css';
import Display from './components/display';
import Container from './components/Container';

function App() {
  return <div className={styles.calculator}>
   <Display/>
   <Container/>
    </div>
}

export default App
