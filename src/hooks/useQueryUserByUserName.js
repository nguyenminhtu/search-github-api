import { useState, useEffect } from "react";
import axios from "axios";

import {
  DEFAULT_GITHUB_URL,
  DEFAULT_PARAMS,
  DEFAULT_PER_PAGE
} from "../constants";

const useQueryUserByUserName = ({ page = 1, userName = "", skip = false }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    if (!!skip) {
      return;
    }

    setLoading(true);
    setData(null);
    setErrors(null);

    axios
      .get(
        `${DEFAULT_GITHUB_URL}/search/users?q=${userName}&page=${page}&per_page=${DEFAULT_PER_PAGE}&${DEFAULT_PARAMS}`
      )
      .then(data => {
        setData(data.data);
        setLoading(false);
      })
      .catch(error => {
        setErrors(error);
        setLoading(false);
      });
  }, [page, skip, userName]);

  return { loading, data, errors };
};

export default useQueryUserByUserName;
