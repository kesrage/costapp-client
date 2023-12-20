import React from "react"
import HeaderCosts from "./HeaderCosts/HeaderCosts";

const CostsPage = () => {
  return (
    <div className="container">
      <h2 style={{textAlign: 'center',  marginBottom: 30}}>Мои расходы</h2>
      <HeaderCosts  />
    </div>
  )
};

export default CostsPage;
