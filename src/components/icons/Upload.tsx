import React from "react";

interface Icon {
  w?: number;
  h?: number;
  fill?: string;
  className?: string;
}

const Upload = ({ w, h, fill, className }: Icon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill={fill ? fill : "none"}
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        stroke="#1C274C"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 15V2m0 0l3 3.5M12 2L9 5.5"
      ></path>
      <path
        stroke="#1C274C"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M8 22h8c2.828 0 4.243 0 5.121-.878C22 20.242 22 18.829 22 16v-1c0-2.828 0-4.242-.879-5.121-.768-.768-1.946-.865-4.121-.877m-10 0c-2.175.012-3.353.109-4.121.877C2 10.758 2 12.172 2 15v1c0 2.829 0 4.243.879 5.122.3.3.662.497 1.121.627"
      ></path>
    </svg>
  );
};

export default Upload;
