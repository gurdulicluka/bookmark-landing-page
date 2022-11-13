import { useMediaQuery } from "react-responsive";

export const useScreen = () => {
  const sm = useMediaQuery({ maxWidth: 768 });
  const md = useMediaQuery({ minWidth: 769 });
  const lg = useMediaQuery({ minWidth: 1024 });
  const xl = useMediaQuery({ minWidth: 1280 });
  return { sm, md, lg, xl };
};
