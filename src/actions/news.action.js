import { newsConstants } from '../constants';

export const newsActions = {
  getAllNews,
  publishNews
}

function getAllNews (news) {
  return {
    type: newsConstants.GET_USERS_ALL_NEWS,
    allNews: news
  };
}

function publishNews (news) {
  return {
    type: newsConstants.SEND_NEWS,
    publishedNews: news
  };
}
