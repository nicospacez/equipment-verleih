import React, {Component} from 'react';
import PubSub from 'pubsub-js';

export default class LoginService{

    constructor(){

    }
    
    checkLogin(){
        PubSub.publish('checkLogin',{isLoggedIn:false});
    }

}
