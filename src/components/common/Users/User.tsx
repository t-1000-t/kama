import React, {FC} from "react"
import styles from "./user.module.css"
import userPhoto from "../../assets/images/user.png"
import {NavLink} from "react-router-dom"
import {getFollowingInProgress} from "../../../redux/users-selectors";
import {unfollow} from "../../../redux/users-reducer";
import {UserType} from "../../../types/types";

type PropsType = {
    user: UserType
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

let User: FC<PropsType> = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/Profile' + user.id}>
                        <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                             className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={getFollowingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id)
                        }}>
                            Unfollow</button>
                        : <button disabled={getFollowingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id)
                        }}>
                            Follow</button>}
                            </div>
                            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </span>
            </span>
        </div>
    )
}

export default User