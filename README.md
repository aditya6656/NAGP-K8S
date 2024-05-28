# Overview
Run &amp; Deploy NodeJS Application With MySQL on K8S. The app is exposing 1 APIs.



#URL for Service API tier to view the records from backend tier.

```
GET http://<LoadbalancerServiceIP>:<ExposedPot>/records

http://34.100.243.83:8080/records
```


# Github link:

Here is the link to the git repo, comprising of all the yamls and also the source code to NodeJS application.
Further instruction to build the docker image out of the source code is mention in another Readme file present under the NodeJS Application Folder.

```
https://github.com/aditya6656/NAGP-K8S
```

# Docker image:

In case you don't wish to redo the build for docker image from source code, feel free to use the docker image directly via:

#Original Image

docker pull aditya6656/nagp-kubernetes-jsassignment

```

https://hub.docker.com/r/aditya6656/nagp-kubernetes-jsassignment
```

#rolling Update image

docker pull aditya6656/nagprollingupdate

```
https://hub.docker.com/r/aditya6656/nagprollingupdate

```


#Video Recording Links-


```
https://nagarro-my.sharepoint.com/:f:/p/aditya_alok/EpHAe2HAN6VPnBAC755kqswBatrhHZ_Kxkqh0wc5JLCijQ?e=r99TKn
```


Name: Aditya Alok
Email: aditya.alok@nagarro.com
Employee code: 3151430
