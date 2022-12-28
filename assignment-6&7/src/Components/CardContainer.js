import CardComponent from "./CardComponent";

const CardContainer = ({ userData }) => {
  return (
    <div className="container">
      <div className="row">
        {userData.map((singleUser) => {
          return (
            <CardComponent singleUser={singleUser} key={singleUser.login} />
          );
        })}
      </div>
    </div>
  );
};

export default CardContainer;
