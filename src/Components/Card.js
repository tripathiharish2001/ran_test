import WorkHistoryIcon from "@mui/icons-material/WorkHistory";

const Card = ({ data }) => {
  return (
    <div className="card-container cc-rot ">
      <div className="cc-icon">
        <WorkHistoryIcon className={"icon "} />
      </div>

      <h3 className="cc-title">{data[0]}</h3>
      <p className="cc-description">{data[1]}</p>
    </div>
  );
};

export default Card;
