import React from "react";
import styles from './successForm.module.css';
import { connect } from "react-redux";
import { changeSuccessFromBack } from "../../redux/actions";

class SuccessForm extends React.Component {
    constructor(props){
        super(props);
    }

    cleanSuccessFromBackHandler = (value) => {
        this.props.changeSuccessFromBack(value);
    };
    
    render() {
        const { successFromBack } = this.props;
        
        return (
            <div className={styles.global}>
                <div className={styles.div}>
                    <p className={styles.message}>{successFromBack}</p>
                    <button className={styles.button} onClick={() => this.cleanSuccessFromBackHandler('')}>Aceptar</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        successFromBack: state.successFromBack
    }
};

const mapDispatchToProps = (dispatch)=>{
    return{
        changeSuccessFromBack:()=>{dispatch(changeSuccessFromBack())}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SuccessForm);





// import React from "react";
// import styles from './successForm.module.css';
// import { useDispatch, useSelector } from "react-redux";
// import { changeSuccessFromBack } from "../../redux/actions";

// const SuccessForm = ()=>{

//     const successFromBack = useSelector(state => state.successFromBack);
//     const dispatch = useDispatch();

//     const cleanSuccessFromBackHandler = (value) => {
//         return dispatch(changeSuccessFromBack(value))
//     };

//     return(
//         <div className={styles.global}>
//             <div className={styles.div}>
//                 <p className={styles.message}>{successFromBack}</p>
//                 <button className={styles.button} onClick={()=>cleanSuccessFromBackHandler('')}>Aceptar</button>
//             </div>
//         </div>
//     )
// };

// export default SuccessForm;