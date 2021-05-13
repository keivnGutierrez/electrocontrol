import React from "react";
import Lottie from "react-lottie";

export default function Animation(props) {
  // const [play, setplay] = useState(true);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: props.animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  let heightAni;
  let widthAni;

  if (window.innerWidth >= 768) {
    heightAni = props.heightDesk;
    widthAni = props.widthDesk;
  } else {
    heightAni = props.heightMovil;
    widthAni = props.widthMovil;
  }
  return (
    <div
      onClick={() => {

      }}
    >
      <Lottie options={defaultOptions} height={heightAni} width={widthAni} />
    </div>
  );
}
