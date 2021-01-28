import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  requestUsers
} from "../../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../../common/Preloader";
import { compose } from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers
} from "../../../redux/users-selectors";
import { AppStateType, UserType } from "../../../types/types";


type MapStateToPropsType = {
  currentPage: number
  pageSize: number
  totalUsersCount: number
  isFetching: boolean
  followingInProgress: Array<number>
  users: Array<UserType>
}

type MapDispatchPropsType = {
  getUsers: (currentPage: number, pageSize: number) => void
  //follow: (userId: number) => (dispatch: any) => Promise<void>
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}

type OwnPropsType = {
  pageTitle: string
}


type PropsType = OwnPropsType & MapStateToPropsType & MapDispatchPropsType


class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    const { currentPage, pageSize, getUsers } = this.props;
    getUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    const { pageSize, getUsers } = this.props;
    getUsers(pageNumber, pageSize);
  };

  render() {
    const {
      totalUsersCount,
      pageSize,
      isFetching,
      currentPage,
      users,
      follow,
      unfollow,
      followingInProgress,
      pageTitle
    } = this.props;
    return (
      <>
      <h2>{pageTitle}</h2>
        {isFetching ? <Preloader /> : null}
        <Users
          onPageChanged={this.onPageChanged}
          totalUsersCount={totalUsersCount}
          pageSize={pageSize}
          currentPage={currentPage}
          users={users}
          follow={follow}
          unfollow={unfollow}
          followingInProgress={followingInProgress}
        />
      </>
    );
  }
}

 

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    totalUsersCount: getTotalUsersCount(state),
    pageSize: getPageSize(state),
    isFetching: getIsFetching(state),
    currentPage: getCurrentPage(state),
    users: getUsers(state),
    followingInProgress: getFollowingInProgress(state)
  };
};

export default compose(
  // <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
  connect<MapStateToPropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    follow,
    unfollow,
    getUsers: requestUsers
  })(UsersContainer)
);
