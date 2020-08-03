import axios from "axios";

export default {
  getDailyCount: function () {
    let dailySvcURL = process.env.REACT_APP_DAILY_SVC_URL || "";

    return axios.get(`${dailySvcURL}/api/daily/allcount`);
  },
  getCumulativeCount: function () {
    let cumulativeSvcURL = process.env.REACT_APP_CUMULATIVE_SVC_URL || "";

    console.log(cumulativeSvcURL);

    return axios.get(`${cumulativeSvcURL}/api/cumulative/allcount`);
  },
  getNationalCount: function () {
    let nationalSvcURL = process.env.REACT_APP_NATIONAL_SVC_URL || "";

    return axios.get(`${nationalSvcURL}/api/national/allcount`);
  },
};
