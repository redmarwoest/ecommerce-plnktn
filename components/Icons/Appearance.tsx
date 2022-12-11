const Appearance = (props: any, width: any, height: any) => {
  return (
    <svg
      id="appearance"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      {...props}
    >
      <defs>
        <clipPath id="clip-path">
          <rect
            id="Rectangle_247"
            data-name="Rectangle 247"
            width="24"
            height="24"
            fill="none"
          />
        </clipPath>
      </defs>
      <g id="Group_296" data-name="Group 296" clip-path="url(#clip-path)">
        <path
          id="Path_141"
          data-name="Path 141"
          d="M24,12A12,12,0,1,1,12,0,12,12,0,0,1,24,12"
          fill="#fff"
        />
      </g>
    </svg>
  );
};

export default Appearance;
