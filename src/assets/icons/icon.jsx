import { useTheme } from "../../../context/ThemeContext";

export const HomeIcon = () => {
  const { theme } = useTheme();
  return (
    <svg
      viewBox="0 0 16 16"
      width={35}
      height={35}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z"
          fill={`${theme === "dark" ? "#ffffff" : "#000000"}`}
        ></path>{" "}
      </g>
    </svg>
  );
};
export const FolderIcon = () => {
  const { theme } = useTheme();
  return (
    <svg
      viewBox="0 0 16 16"
      width={35}
      height={35}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M0 1H6L9 4H16V14H0V1Z"
          fill={`${theme === "dark" ? "#ffffff" : "#000000"}`}
        ></path>{" "}
      </g>
    </svg>
  );
};

export const MailIcon = () => {
  const { theme } = useTheme();
  return (
    <svg
      viewBox="0 -3.5 32 32"
      width={35}
      height={35}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
      fill={`${theme === "dark" ? "#ffffff" : "#000000"}`}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <title>mail</title> <desc>Created with Sketch Beta.</desc>{" "}
        <defs> </defs>{" "}
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          sketch:type="MSPage"
        >
          {" "}
          <g
            id="Icon-Set-Filled"
            sketch:type="MSLayerGroup"
            transform="translate(-414.000000, -261.000000)"
            fill={`${theme === "dark" ? "#ffffff" : "#000000"}`}
          >
            {" "}
            <path
              d="M430,275.916 L426.684,273.167 L415.115,285.01 L444.591,285.01 L433.235,273.147 L430,275.916 L430,275.916 Z M434.89,271.89 L445.892,283.329 C445.955,283.107 446,282.877 446,282.634 L446,262.862 L434.89,271.89 L434.89,271.89 Z M414,262.816 L414,282.634 C414,282.877 414.045,283.107 414.108,283.329 L425.147,271.927 L414,262.816 L414,262.816 Z M445,261 L415,261 L430,273.019 L445,261 L445,261 Z"
              id="mail"
              sketch:type="MSShapeGroup"
            >
              {" "}
            </path>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};

export const UserIcon = () => {
  const { theme } = useTheme();
  return (
    <svg
      viewBox="0 0 16 16"
      width={35}
      height={35}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z"
          fill={`${theme === "dark" ? "#ffffff" : "#000000"}`}
        ></path>{" "}
        <path
          d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z"
          fill={`${theme === "dark" ? "#ffffff" : "#000000"}`}
        ></path>{" "}
      </g>
    </svg>
  );
};

export const GithubIcon = () => {
  const { theme } = useTheme();
  return (
    <svg
      viewBox="0 0 20 20"
      width={35}
      height={35}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <title>github [#142]</title> <desc>Created with Sketch.</desc>{" "}
        <defs> </defs>{" "}
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          {" "}
          <g
            id="Dribbble-Light-Preview"
            transform="translate(-140.000000, -7559.000000)"
            fill={`${theme === "dark" ? "#ffffff" : "#000000"}`}
          >
            {" "}
            <g id="icons" transform="translate(56.000000, 160.000000)">
              {" "}
              <path
                d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                id="github-[#142]"
              >
                {" "}
              </path>{" "}
            </g>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};

export const MenuIcon = () => {
  const { theme } = useTheme();
  return (
    <svg
      viewBox="0 0 24 24"
      width={35}
      height={35}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M5 12H20"
          stroke={`${theme === "dark" ? "#ffffff" : "#000000"}`}
          strokeWidth="2"
          strokeLinecap="round"
        ></path>{" "}
        <path
          d="M5 17H20"
          stroke={`${theme === "dark" ? "#ffffff" : "#000000"}`}
          strokeWidth="2"
          strokeLinecap="round"
        ></path>{" "}
        <path
          d="M5 7H20"
          stroke={`${theme === "dark" ? "#ffffff" : "#000000"}`}
          strokeWidth="2"
          strokeLinecap="round"
        ></path>{" "}
      </g>
    </svg>
  );
};
