import React, { Component } from 'react';

import './home-page.scss';
import { connect } from 'react-redux';
import withApiService from '../hoc';
import { newsActions } from '../../actions/news.action';
import { userActions } from '../../actions';
import { history } from '../helpers/history';
import { Link } from 'react-router-dom';

class HomePage extends Component {

  componentDidMount () {
    this.props.getNewsFeed();
  }

  postSubmit = (event) => {
    event.preventDefault();
    const post = {
      content: event.target.content.value
    }
    this.props.sendPost(post);
  }

  render () {
    const { firstName, news } = this.props;

    return (
      <div>
        <h1>Welcome, { firstName }!</h1>
        <form onSubmit={this.postSubmit}>
          <div className="form-group">
            <textarea className="form-control" name="content" placeholder="What's new?" rows="3"/>
          </div>
          <button className="btn btn-primary">Post</button>
        </form>
        <ul>
          { news.map((singleNews, index) => {
            return <li key={index}>
              <p><strong>{singleNews.content}</strong></p>
              <p>Created by <Link to={singleNews.creator._id}>{singleNews.creator.name}</Link></p>
            </li>
          }) }
        </ul>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    firstName: state.users.firstName,
    news: state.news
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { apiService } = ownProps;

  return {
    getNewsFeed: () => {
      apiService.getNews()
        .then((response) => {
          dispatch(newsActions.getAllNews(response));
        })
        .catch((error) => {
          console.log(error);
        })
    },
    sendPost: (content) => {
      apiService.postNews(content).then((response) => {
        dispatch(newsActions.publishNews(response));
      })
        .catch((error) => {
          console.log(error);
        })
    }
  }
};

export default withApiService()(connect(mapStateToProps, mapDispatchToProps)(HomePage));
