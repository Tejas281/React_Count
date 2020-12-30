import React from 'react';

const Props = (props) =>{
    
    // two types to  define of the values in props first{ const {firstname,lastname,age} =props;}
    //second this types console.log(props);
    const {firstname,lastname,age} =props;
    //console.log(props);
    // two types to  define of the values in props
    return(
     <div>  
   <h6>Employee name :- {/*props.*/firstname} {/*props.*/lastname } {/*props.*/age}</h6>
      </div>
          );
}
export default Props;