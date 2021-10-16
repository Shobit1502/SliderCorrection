import react from "react";

function Websitecards(props) {
  console.log(props.background);
  console.log(props.link);
  console.log(props.about);
  console.log(props.tech);
  return (
    <button type="button" class="btn btn-primary">
      Primary
    </button>
  );
}

export default Websitecards;
