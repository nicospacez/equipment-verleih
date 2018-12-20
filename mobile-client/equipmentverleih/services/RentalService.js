import React, { Component } from 'react';
import PubSub from 'pubsub-js';

export const PATH = "http://192.168.99.100:8080/jee/app/";

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

export const getWarenkorbList = () => {

  data = {
    body: [
      {
        bild: "asdf",
        name: "asdf"
      },
      {
        bild: "asdf",
        name: "asdf"
      },
      {
        bild: "asdf",
        name: "asdf"
      }
    ]
  }
  return data;

}

export const getGeliehenList = () => {
  data = {
    head: ["Name", "Kürzel", "Status"],
    body: [
      {
        name: "Lumix GH4",
        kuerzel: "K01",
        status: "25.01.2018"
      },
      {
        name: "Lumix GH4",
        kuerzel: "K01",
        status: "25.01.2018"
      },
      {
        name: "Lumix GH4",
        kuerzel: "K01",
        status: "25.01.2018"
      },
      {
        name: "Lumix GH4",
        kuerzel: "K01",
        status: "25.01.2018"
      },
      {
        name: "Lumix GH4",
        kuerzel: "K01",
        status: "25.01.2018"
      },
      {
        name: "Lumix GH4",
        kuerzel: "K01",
        status: "25.01.2018"
      }
    ]
  }
  return data;

}

export const getReserviertList = () => {

  data = {
    head: ["Name", "Kürzel", "Status"],
    body: [
      {
        name: "Lumix GH4",
        kuerzel: "K01",
        status: "25.01.2018"
      },
      {
        name: "Lumix GH4",
        kuerzel: "K01",
        status: "25.01.2018"
      },
      {
        name: "Lumix GH4",
        kuerzel: "K01",
        status: "25.01.2018"
      },
      {
        name: "Lumix GH4",
        kuerzel: "K01",
        status: "25.01.2018"
      },
      {
        name: "Lumix GH4",
        kuerzel: "K01",
        status: "25.01.2018"
      },
      {
        name: "Lumix GH4",
        kuerzel: "K01",
        status: "25.01.2018"
      }
    ]
  }
  return data;

}

export const getAdminList = () => {
  const url = "http://192.168.99.100:8080/jee/app/produkt/";
  return fetch(url)
    .then((res) => res.json());
}

export const postVerleih = (produktId) => {
  console.log("service " + produktId);
  fetch('http://192.168.99.100:8080/jee/app/verleih/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "startDate": new Date(),
      "endDate": "21-12-2018",
      "hergeborgtVon": { "userId": 1 },
      "zurueckgenommenVon": { "userId": 1 },
      "produkt": { "produktId": produktId },
      "user": { "userId": 1 }
    }),
  }).then((res) => {
    console.log(res);
  }).catch((error) => {
    console.error(error);
  });
}

export const getKlassen = () => {

  return getUser().then(data => data.filter((el, i, a) => i === a.indexOf(el)).map(v => v.klasse).sort());
}

export const getUser = () => {
  const url = "http://192.168.99.100:8080/jee/app/user/";
  return fetch(url)
    .then((res) => res.json());
}

export const dataStore = {
  allProducts: null
}
