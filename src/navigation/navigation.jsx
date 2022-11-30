import { Outlet } from "react-router-dom";
import React from "react";
// import { UserContext } from "../../contexts/user.context";
// import { userReducer, INITIAL_STATE } from "../../reducers/userReducer";
import { Fragment, useContext, useReducer } from "react";
// import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
// import { signOutUser } from "../../utils/firebase/firebase.utils";

import {NavigationContainer, NavLinks, NavLink, LogoContainer} from './navigation.styles';
const Navigation = () => {

    // const [state, dispatch] = useReducer(INITIAL_STATE, userReducer);
    const {currentUser} = false; //state;

    return (
        <Fragment>
            <NavigationContainer className='navigation'>
                <div>
                    LUV
                </div>
                <NavLinks>
                    <div>
                        OVERVIEW
                    </div>
                    {
                        currentUser ? (
                            <div >SIGN OUT</div>
                        ) : (
                            <div>
                                SIGN IN
                            </div>
                        )
                    }
                </NavLinks>
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
}

export default Navigation