import styles from "../Container.module.css";

const Container = () => {
    const  buttonNames = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0', '.'] 
return <>
 
<div className= {styles.button}>
    {
        buttonNames.map(buttonName =>  <button className={styles.btn}>{buttonName}</button>)
    }
</div>
</> 
}
export default Container;