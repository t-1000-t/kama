import profileReducer, {actions} from "./profile-reducer";
import ReacrDOM from "react-dom"
import App from "../App"
import React from "react"
import {ProfileType} from "../types/types";

let state = {
    posts: [
        { id: 1, message: "HI", likesCount: 12 },
        { id: 2, message: "HI2", likesCount: 14 },
        { id: 3, message: "HI3", likesCount: 15 },
        { id: 4, message: "HI4", likesCount: 16 },
        { id: 5, message: "HI5", likesCount: 17 },
    ],
    profile: null,
    status: '',
    newPostText: ''
}

it('length of post should be incremented', function () {
    // 1. test data
    let action = actions.addPostActionCreator("intshop.store")
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts.length).toBe(5)
});

it('message of new post should be correct', function () {
    // 1. test data
    let action = actions.addPostActionCreator("intshop.store")
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts[4].messages).toBe("intshop.store")
});

it('after deleting length of messages should be decrement', function () {
    // 1. test data
    let action = actions.deletePost(1)
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts.length).toBe(3)
});

it("after deleting length should't be decrement if id is correct", function () {
    // 1. test data
    let action = actions.deletePost(1080)
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts.length).toBe(4)
});
