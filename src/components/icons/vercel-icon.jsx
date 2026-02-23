import { useTheme } from "../theme/theme-provider";

export const VercelIcon = ({ height = 40, width = 40 }) => {
  const { theme } = useTheme();
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.document.documentElement.classList.contains("dark"));

  const fill = isDark ? "#ffffff" : "#000000";
  return (
    <svg
      fill={fill}
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      stroke={fill}
      height={height}
      width={width}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <title>Vercel icon</title>
        <path d="M24 22.525H0l12-21.05 12 21.05z"></path>
      </g>
    </svg>
  );
};
