import axios from "axios";

export const SET_SEARCHES = "SET_SEARCHES";
export const SET_RECENT_SEARCHES = "SET_RECENT_SEARCHES";
export const SET_KEYWORDS = "SET_KEYWORDS";
export const SET_PAGINATION = "SET_PAGINATION";
export const SET_LOADER = "SET_LOADER";

export const setSearches = (payload) => {
  return {
    type: SET_SEARCHES,
    payload: payload
  }
}

export const setHistory = (payload) => {
  return {
      type: SET_RECENT_SEARCHES, 
      payload: payload
    }
}

export const setKeywords = (payload) => {
  return {
    type: SET_KEYWORDS,
    payload: payload
  }
}

export const setRecentSearches = () => {
  return {
    type: SET_RECENT_SEARCHES
  }
}

export const setLoading = (payload) => {
  return {
    type: SET_LOADER,
    payload: payload
  }
}

export const onSearch = async (pagination, keywords) => {
  let response = await axios.get("https://hn.algolia.com/api/v1/search?page=" + pagination + "&query=" + keywords);
  console.log(response)
  if (response.data) {
    return setSearches(response.data);
  }
  else {
    console.log(response);
  }
}
