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

export const fetchUserProfile =(userId) => {
    const requestUrl = 'http://localhost:8080/user/'+userId;
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

export const getAllTopics = (userId) => {
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

export const getAllTopicsOfUser = (userId) => {
    const requestUrl = 'http://localhost:8080/topic/user/'+userId;
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

export const addPostContent = (content,postId) => {
    const requestUrl = `http://localhost:8080/post/${postId}/content/image`;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        body: content,
    };
    const res = request(requestUrl, options).then(response => response.data);    
    return res;
}

export const fetchPostsByTopic = (topicId) => {
    const requestUrl = 'http://localhost:8080/post/ofTopic/'+topicId;
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

export const fetchPostImage = (postId) => {
    const requestUrl = `http://localhost:8080/post/${postId}/content/image`;
    const options = {
        method: 'GET',
        headers: {
            'Access-Allow-Cross-Origin':"*"
        },
    };
    const res = request(requestUrl, options);
    return res;
}