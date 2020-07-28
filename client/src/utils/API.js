import axios from "axios";

export default {
  getDailyCount: function () {
    let dailySvcURL = process.env.REACT_APP_DAILY_SVC_URL;

    return axios.get(`${dailySvcURL}/api/daily/count`);
  },
  getCumulativeCount: function () {
    let cumulativeSvcURL = process.env.REACT_APP_CUMULATIVE_SVC_URL;

    return axios.get(`${cumulativeSvcURL}/api/cumulative/count`);
  },
};
