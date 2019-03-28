import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import { AsyncStorage } from 'react-native';

const data = {
  server: {
    base_url: "http://192.168.99.100:8080/jee/app/",
    authheader: null
  },
  user: null
}

export const saveLoginDataLocal = async (username, password) => {
  await AsyncStorage.setItem('login', JSON.stringify({ username: username, password: password }));
  // await AsyncStorage.setItem('login_data', { username: username, password: password });
}

export const retrieveLoginDataLocal = async () => {

  try {
    const value = await AsyncStorage.getItem('login');
    if (value) {
      let json = JSON.parse(value);
      return json;

    } else {
      return "nd";
    }
  } catch (error) {
    console.log("Retrieve Data", error);
  }
  return "nd";
}

export const login = (username, password) => {

  return fetch(data.server.base_url + 'jwt', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      {
        "username": username,
        "password": password
      }
    ),
  }).then(res => res.json())
    .then(r => {

      console.log("data:", r);
      if (r.state == "SUCCESS") {
        data.server.authheader = new Headers({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + r.token
        });
        data.user = r.userDto;
        saveLoginDataLocal(username, password);

      }
      return r;
    })
    .catch((error) => {
      console.error(error);
    });


}

export const getUser = () => {
  return data.user;
}

export const getUsers = () => {
  const url = data.server.base_url + "user";
  return fetch(url, {
    headers: data.server.authheader
  })
    .then((res) => res.json());
}

export const getUsersByClass = (klasse) => {
  const url = data.server.base_url + "user/getUserToKlasse/" + klasse;
  return fetch(url, {
    headers: data.server.authheader
  })
    .then((res) => res.json());
}

export const getCartList = () => {
  cartlist = {
    head: ["Name", "Name", "Ausgeliehen"],
    body: [
      {
        name: "Lumix GH4",
        kuerzel: "Nico",
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

  mdata = {
    body: [

    ]
  }
  return mdata;

}

export const getReserviertList = () => {

  let mdata = {
    head: ["Name", "Kürzel", "Status"],
    body: [

    ]
  }
  return mdata;

}

export const getGeliehenList = () => {


    const url = data.server.base_url + "verleih/getUsersVerleih/" + data.user.userId;
    return fetch(url, {
      headers: data.server.authheader
    })
      .then((res) => res.json());
  

}

export const getAdminList = () => {
  const url = data.server.base_url + "produkt/";
  return fetch(url, {
    headers: data.server.authheader
  })
    .then((res) => res.json());
}

export const postVerleih = (produktId, userID, endDate) => {
  console.log("USERID", userID)
  sday = new Date().getDate();
  smMonth = new Date().getMonth() + 1;
  syear = new Date().getFullYear();
  smonth = ("0" + smMonth).slice(-2);
  sDate = sday + "-" + smonth + "-" + syear;

  eday = endDate.getDate();
  emMonth = endDate.getMonth() + 1;
  eyear = endDate.getFullYear();
  emonth = ("0" + emMonth).slice(-2);
  eDate = eday + "-" + emonth + "-" + eyear;

  console.log("service " + produktId);
  return fetch(data.server.base_url + 'verleih/', {
    method: 'POST',
    headers: data.server.authheader,
    body: JSON.stringify({
      "startDate": sDate,
      "endDate": eDate,
      "hergeborgtVon": { "userId": data.user.userId },
      "produkt": { "produktId": produktId },
      "user": { "userId": userID }
    }),
  }).then((res) => {
    console.log(res);
    return res;
  }).catch((error) => {
    console.error(error);
  });
}

export const postProdukt = (product) => {

  return fetch(data.server.base_url + 'produkt/', {
    method: 'POST',
    headers: data.server.authheader,
    body: JSON.stringify(product),
  }).then((res) => {
    return res;
  }).catch((error) => {
    console.error(error);
  });
}

export const postCategory = (cat) => {

  return fetch(data.server.base_url + 'kategorie/', {
    method: 'POST',
    headers: data.server.authheader,
    body: JSON.stringify(cat),
  }).then(res => {
    console.log(res);
    return res;
  });

}

export const getLatestVerleih = (produkt_id) => {

  const url = data.server.base_url + "verleih/getLatestVerleih/" + produkt_id;
  return fetch(url, {
    headers: data.server.authheader
  })
    .then((res) => res.json());
}


export const takeBackProduct = (verleih_id, user_id) => {
  put = {
    verleihId: verleih_id,
    zurueckgenommenVon: {
      userId: user_id
    }
  }
  return fetch(data.server.base_url + 'verleih/', {
    method: 'PUT',
    headers: data.server.authheader,
    body: JSON.stringify(put),
  }).then(res => {
    console.log(res);
    return res;
  });

}

export const getKlassen = () => {

  const url = data.server.base_url + "user/getAllKlassen";
  return fetch(url, {
    headers: data.server.authheader
  })
    .then((res) => res.json());
}



export const dataStore = {
  allProducts: null
}

export const getKategorien = () => {
  const url = data.server.base_url + "kategorie";
  return fetch(url, {
    headers: data.server.authheader
  })
    .then((res) => res.json());
}
