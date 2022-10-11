/* withRouter disini sebagi High order (HOC) merupakan sbh komponen yg mana jirarki lebih tinggi 
dripada komponen biasa*/

import { useNavigate, useParams } from "react-router-dom";
import React from "react";

export const WithRouter = (Component) => {
  const Wrapper = (props) => {
    const params = useParams();
    const navigate = useNavigate();

    return <Component {...props} navigate={navigate} params={params} />;
  };

  return Wrapper;
};
