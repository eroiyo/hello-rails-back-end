import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreeting } from '../apiCall';
import { SetSalute } from '../redux/salute';

const Hello = (() => {

    const salute = useSelector((state) => state.salute);
    const dispatch = useDispatch();
    
    useEffect(async () => {
        let result;
          result = await getGreeting(salute);
          dispatch(SetSalute(result));
      }, []);

    return(
  <h1>
    {`${salute}`}
  </h1>
    )
}
);

export default Hello;