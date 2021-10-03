
import { useHistory } from "react-router-dom";

import "./GraphicsImageCard.css";

export default function ({ name, data, cid,imageViewSetter, openGraphicsImageViewer, category }) {

  const history = useHistory();

  function handleClick(id){
    const link = `/?cid=${cid}&id=${id}&sec=graphicsportfolio#graphics-${cid}`;
    history.push(link);
    imageViewSetter(cid,id);
    openGraphicsImageViewer();
    // imageViewSetter(key,id);
  }

  return (

    <div id={'graphics-'+cid} className="graphics-imgae-card-container">
      <div className="digital-art-portfolio">
        <h1>{name}</h1>
        <div className="digital-arts">
          {data.map((item,i)=> (
            <div
            onClick={()=>handleClick(i)}
              key={item.name}
              className="digital-art"
              style={{ backgroundImage: `url('/assets/img/graphics-portfolio/${category}/thumbnail/${item.thumbnail}` }}
            ></div>
          ))}

        </div>
      </div>
    </div>

  )
}