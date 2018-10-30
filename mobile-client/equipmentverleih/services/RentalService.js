import React, {Component} from 'react';
import PubSub from 'pubsub-js';

 

export const getCartList = () => {
    cartlist = {
        head: ["Name", "Name", "Ausgeliehen"],
        body: [
          {
            name: "Lumix GH4",
            kuerzel: "Nico",
            status: "25.01.2018"
          },
          {
            name: "Lumix GH4",
            kuerzel: "Aistleitner",
            status: "25.01.2018"
          },
          {
            name: "Lumix GH4",
            kuerzel: "Pascal",
            status: "25.01.2018"
          },
          {
            name: "Lumix GH4",
            kuerzel: "Jonas",
            status: "25.01.2018"
          },
          {
            name: "Lumix GH4",
            kuerzel: "Mösner",
            status: "25.01.2018"
          },
          {
            name: "Lumix GH4",
            kuerzel: "hubert",
            status: "25.01.2018"
          },
          {
            name: "Lumix GH4",
            kuerzel: "Nico",
            status: "25.01.2018"
          },
          {
            name: "Lumix GH4",
            kuerzel: "Aistleitner",
            status: "25.01.2018"
          },
          {
            name: "Lumix GH4",
            kuerzel: "Pascal",
            status: "25.01.2018"
          },
          {
            name: "Lumix GH4",
            kuerzel: "Jonas",
            status: "25.01.2018"
          },
          {
            name: "Lumix GH4",
            kuerzel: "Mösner",
            status: "25.01.2018"
          },
          {
            name: "Lumix GH4",
            kuerzel: "hubert",
            status: "25.01.2018"
          }
        ]
      }
    //let username = name.toLowerCase().trim();
    //const URL = `https://api.github.com/users/${username}`;
    //return fetch(URL)
    //        .then((res) => res.json());
    return cartlist;
}
