import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {increment} from '../Redux/actions';

function TestComponent (){
  const counter  = useSelector(state => state.counter);
  

  const dispatch = useDispatch();
 return (
   <div>
     <p>count: {counter}</p>
     <button onClick={() => dispatch(increment(5))}>Click</button>
   </div>
 );
};

export default TestComponent;


