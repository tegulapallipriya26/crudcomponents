// import React from 'react'

// const CakeContainer = (props) => {
//     console.log(props);
//   return (
//     <div>CakeContainer</div>
//   )
// }
// const mapStateToProps=state=>{
//     return{
//         totalCakes:state.numOfCakes
//     }
// }
// const mapDispatchToProps=dispatch=>{
//     return{
//         xyz:()=>dispatch()
//     }
// }

// export default CakeContainer
import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import{buyCake} from '../redux/cake/cakeActions';
const CakeContainer=()=>{
    let numOfCakes=useSelector(state=>state.numOfCakes);
    let dispatch=useDispatch();
return(
    <div>
        <h1>Number of cakes in the bakery:{numOfCakes}</h1>
        <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>

    </div>
)
}
export default CakeContainer