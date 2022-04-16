import request from "./Request";
import { useState } from "react";
export const userSignJWTVerification = (user) => {
    const body = {
        "Name": user.displayName,
        "Email": user.email,
        "PhotoURL": user.photoURL,
        "id":user.uid
    }
    const requestUrl = 'http://localhost:8080/user';
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: body,
    };
    const res = request(requestUrl, options).then(response => response.data);    
    return res;
};

export const fetchUserProfile =() => {
    const requestUrl = 'http://localhost:8080/user/';
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };
    const res =request(requestUrl, options).then(response => response.data);    
    return res;
}

export const updateUserDetails = (body) => {
    const requestUrl = 'http://localhost:8080/user/update';
    const options = {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: body,
    };
    const res =request(requestUrl, options).then(response => response.data);    
    return res;
}

export const createTopic = (body) => {
    console.log(body);
    const requestUrl = 'http://localhost:8080/topic/create/';
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: body,
    };
    const res = request(requestUrl, options).then(response => response.data);    
    return res;
}

export const updateTopic = () => {
    
}

export const deleteTopic = () => {
    
}

export const getTopic = () => {
    
}

export const getAllTopics = () => {
    const requestUrl = 'http://localhost:8080/topic/';
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };
    const res =request(requestUrl, options).then(response => response.data);    
    return res;
}

export const createPost = (body) => {
    console.log(body);
    const requestUrl = 'http://localhost:8080/post/create/';
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: body,
    };
    const res = request(requestUrl, options).then(response => response.data);    
    return res;
}