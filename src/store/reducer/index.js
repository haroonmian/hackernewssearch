import * as type from "../actions";

const reducer = (state, actions) => {
    switch (actions.type) {
      case type.SET_SEARCHES:
        return {
          ...state,
          searches: actions.payload,
        };
      case type.SET_RECENT_SEARCHES:
        return {
          ...state,
          history: [
            ...state.history,
            { keywords: state.keywords, createdAt: new Date() },
          ],
        };
      case type.SET_KEYWORDS:
        return {
          ...state,
          keywords: actions.payload,
        };
      case type.SET_PAGINATION:
        return {
          ...state,
          currentPagination: actions.payload,
        };
      case type.SET_LOADER:
        return {
          ...state,
          loading: actions.payload,
        };
      default: {
        return {
          ...state,
        };
      }
    }
}

export default reducer;