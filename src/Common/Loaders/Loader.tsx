import { CircularProgress } from "@mui/material";

type Props = {
  size: number;
};

const Loader = ({ size }: Props) => {
  return <CircularProgress size={size} color="primary" sx={{ ml: 2 }} />;
};

export default Loader;
