REST CALLS
===

## User:


|description| method | url | params | return |
|---|--------|-----|---------|----------|
| find user by userid | GET | /user/id/{id} ||User|
| list all user | GET | /user ||UserList|
| login user| POST | /user/login |it140022, password |User|
| creates user | POST | /user | user (Json) | User|

## Kategorie:

|description| method | url | params | return |
|---|--------|-----|---------|----------|
| list all Kategorien | GET | /kategorie ||KategorieList|
| find kategorie by id | GET | /kategorie/id/{id} | | Kategorie|
| create kategorie | POST | /kategorie | kategorie (Json) | Kategorie|

## Produkt:

|description| method | url | params | return |
|---|--------|-----|---------|----------|
| list all Produkte | GET | /produkt ||ProduktList|
| list page of Produkte (1,2,3,..) | GET | /produkt/range/{pageCount}||ProduktList|
| create Produkt | POST | /produkt | | Produkt|

## Verleih:

|description| method | url | params | return |
|---|--------|-----|---------|----------|
| list all Verleih | GET | /verleih ||VerleihList|
| find Verleih by id | GET | /verleih/id/{id} | | Verleih|
| find Verleih by produktId | GET | /verleih/findByProduktId/{produktId} | | Verleih|
| create Verleih | POST | /verleih | | Verleih|


JEE Docker Application Stack
===

The JEE Docker Application stack is a local environment to develop Java Enterprise Applications.

Service Stack
---

The following services are deployed on the local machine:

- [nginx](https://www.nginx.com/) http server
- [wildfly](http://wildfly.org/) JEE - Application Server
- [mysql](https://www.mysql.com/) Database Server
- [phpmyadmin](https://www.phpmyadmin.net/) database administration

nginx is configured to be a reverse proxy for the Application Server, so that there is no [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) issue when deploying javascript applications.

Quickstart
---

* Install [docker](https://www.docker.com/).
* Open a command shell and change the current directory to the folder where the docker-compose.yml file resides.
* enter the following command:

```bash
docker-compose up --build
```
Be patient, at first start this will download all the required services. Once, when everything installed you can omit the --build parameter at the next start

* Open your browswer and open [localhost](http://localhost/).

Ports
---
The following ports are used. 

| Port |description |
|-------:|------------|
|  [80](http://localhost)| the http port where nginx www - server listens |
|**3306**| mysql Database server |
|**[5050](http://localhost:4000)**| phpmyadmin |
|**[8080](http://localhost:8080)**| wildfly application server |
|**[9990](http://localhost:)**| wildfly management console |
|**8787**| debug port for debugging wildfly as a remote java application |

Before starting please verify that none of the ports in the table above is already used by existing services on your machine.

Example:
- On Windows to check if port 8080 is free run the following command
```netstat -an | findstr 8080``` 
- On OSX or linx to check that port 3306 is available run the command ```netstat -ant | grep 3306```

In both cases nothing should be listed.


JNDI Datasource
---

During docker build a database **mydb** is added to the mysql server. 
This database ist installed as a JNDI data source in the wildfly application server.
The JNDI name is ```java:jboss/datasources/mydb```

Reverse Proxy
---

nginx is configured as a [reverse proxy](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/).
Requests to http://localhost/srv/ are forwared to http://wildfly:8080.

Example: if your service can be reached at http://localhost:8080/myapp/hello you call it now with http://localhost/srv/myapp/hello.
This frees you from any CORS headers and related problems.


Compile and Deploy applications
---

see the [example project](./jpa_rest_demo/readme.md) for an example how to compile an deploy a JEE - Application 
to the jee-docker stack.