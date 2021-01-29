import React from "react"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfileType = {
    savePhoto: string
    isOwner: boolean
    profile: string
    status: string
    saveProfile: string
    updateStatus: string
}

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo savePhoto={props.savePhoto}
                         isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         saveProfile={props.saveProfile}
                         updateStatus={props.updateStatus}
            />
            <MyPostsContainer/>
        </div>
    )
}
export default Profile