import React, { useState } from "react";

import Error from "../../components/Error";
import LoadingIndicator from "../../components/LoadingIndicator";
import SearchBar from "../../components/SearchBar";
import useQueryUserByUserName from "../../hooks/useQueryUserByUserName";
import UserList from "../../components/UserList";

const Home = () => {
  const [userName, setUserName] = useState("");

  const { loading, data, errors } = useQueryUserByUserName({
    page: 1,
    userName,
    skip: !userName
  });

  return (
    <>
      <SearchBar userName={userName} setUserName={setUserName} />

      {!!loading && <LoadingIndicator />}

      {!loading && !data && !!errors && <Error />}

      {!loading && !!data && <UserList data={data} />}
    </>
  );
};

export default Home;
