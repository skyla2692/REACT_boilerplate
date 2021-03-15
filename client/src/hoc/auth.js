import axios from 'axios';
import React, {useEffect} from 'react';
import Axios from 'axios';
import { FormProvider } from 'antd/lib/form/context';
import {useDispatch} from 'react-redux';
import {auth} from '../_actions/user_action';

export default function (SpecificComponent, option, adminRoute = null){

// option? 
// null -> anyone can access
// true -> only logged in personel can access
// false -> logged in personel cannot access

    function AuthenticationCheck(props){

        const dispatch = useDispatch();

        useEffect(() => {

            dispatch(auth())
            .then(response => {
                console.log(response)

                // 로그인 하지 않은 상태
                if(!response.payload.isAuth){
                    if(option){
                        props.history.push('/login')
                    }
                }
                // 로그인 한 상태  
                else{
                    if(adminRoute && !response.payload.isAdmin){
                        props.history.push('/')
                    }
                    else{
                        if(option === false){
                            props.history.push('/')
                        }
                    }
                }
            })  
            //Axios.get('/api/users/auth')
        }, [])

        return(
            <SpecificComponent/>
        )
    }



    return AuthenticationCheck
}