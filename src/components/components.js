// import React, { Component } from 'react';

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function eraseCookie(name) {
    setCookie(name,"",-1);
}

function handleErrors(res) {
    if(!res.ok){
        throw Error(res.statusText);
    }
    return res;
}

function deleteBeer(url) {
    fetch(url, {
            method: 'delete'
        })
        .then(response => response.json()
            .then(json => {
                location.reload();
            })
        );
}

function loginUser(user){
        const data = {
            username: user.username,
            password: user.password
        }

        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        const url = "http://localhost:9001/login";
        const tokenName = "token";
        const uidName = "uid";
        const days = 364 / 2;

        fetch(url, {
          method: 'post',
          headers: myHeaders,
          //mode: 'cors',
          //cache: 'default',
          body: JSON.stringify(data)
        })
                .then((response) =>
                response.json()
            .then((json) => {
                if(json){
                    const token = json.token;
                    const uid = json.uid;
                    setCookie(tokenName, token, days);
                    setCookie(uidName, uid, days);
                    window.location = "http://localhost:3000";
                }if(!json){
                    return false;
                }
            }))
        .catch((e) => {
                console.log(e);
                this.setState({error: e});
        });
}


module.exports = {
	eraseCookie,
	getCookie,
	setCookie,
    handleErrors,
    deleteBeer,
    loginUser
}