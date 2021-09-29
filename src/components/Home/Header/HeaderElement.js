import "./HeaderElement.css";

export default function({data}){
    return(
      <div className="header-icon-box">
        <img src={data.image} alt={data.name} />
        <h3>{data.name}</h3>
      </div>
    )
}