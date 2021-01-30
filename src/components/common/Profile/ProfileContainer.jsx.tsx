import {compose} from "redux"
import {Component} from "react"
import Profile from "./Profile"
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../../redux/profile-reducer"
import {connect} from "react-redux"
import {RouteComponentProps, withRouter} from "react-router-dom"
import {AppStateType, ProfileType} from "../../../types/types";

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => void
}
// Type whatever you expect in 'this.props.match.params.*'
type PathParamsType = {
    userId: string,
}

type PropsType = MapPropsType & DispatchPropsType & RouteComponentProps<PathParamsType>;

class ProfileContainer extends Component<PropsType> {
    refreshProfile() {
        let userId: number | null = +this.props.match.params.userId

        if (!userId) {
            userId = this.props.authorizedUserId
            // todo: may be replase push redirect
            if (!userId) {
                this.props.history.push("/login")
            }
        }

        if (!userId) {
            console.error("ID should exist in URI params or in state ('authorizedUserId')")
        } else {
            this.props.getUserProfile(userId)
            this.props.getStatus(userId)
        }
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: PropsType, prevState: ProfileType) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}/>
        )
    }
}

let mapStateToProps = (state: AppStateType) => {
    return ({
        profile: state.profilePage.profile,
        status: state.profile.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    })
}

export default compose(connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile
}),)(ProfileContainer)