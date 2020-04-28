import { newsConstants } from '../constants'

let initNews = [];

const news = (state = initNews, action) => {

  switch (action.type) {
    case newsConstants.GET_USERS_ALL_NEWS:
      return action.allNews

    case newsConstants.SEND_NEWS:
      return [
        ...state,
        action.publishedNews
      ]

    default:
      return state;
  }

}

export {
  news
};
