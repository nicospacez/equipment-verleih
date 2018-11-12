import React, {Component} from 'react';
import PubSub from 'pubsub-js';

export default class LoginService{

    user = {name:"max", admin:true};

    constructor(){

    }
    
    checkLogin(){
        PubSub.publish('checkLogin',{isLoggedIn:true, isAdmin:userStore.admin});
    }
    isAdmin(){
        return userStore.admin;
    }

    

}

 const userStore = {
    admin:true
}
