import {
  InputBase,
  styled,
  TextField,
  inputBaseClasses,
  Grid,
  Button,
  ButtonBase,
  Box,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { buttonClasses } from "@mui/material/Button";
import NextLink from "next/link";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";

export const ContainerBorderLeft = styled("div")(({ theme }) => ({
  position: "relative",
  marginLeft: 20,
  "&::before": {
    content: '""',
    position: "absolute",
    borderLeft: "3px solid #117189",
    left: -20,
    height: 60,
    top: "50%",
    transform: "translateY(-47%)",
  },
}));

export const Heading = styled("h1")(({ theme }) => ({
  fontSize: 36,
  lineHeight: "44px",
  fontWeight: 800,
  [theme.breakpoints.down("desktop")]: {
    textAlign: "center",
    fontSize: 32,
    lineHeight: "40px",
  },
  [theme.breakpoints.down("tablet")]: {
    textAlign: "center",
    fontSize: 24,
    lineHeight: "32px",
  },
}));

export const Card = styled(Box)(({ theme }) => ({
  padding: 32,
  background: "white",
  border: "1px solid #D9E0E8",
  boxShadow: " 0px 1px 8px rgba(77, 94, 104, 0.12)",
  borderRadius: 12,
  minHeight: 430,
}));

export const CardTitle = styled("h2")(() => ({
  fontSize: 20,
  lineHeight: "28px",
  lineHeightStep: 700,
  color: "#111827",
}));

export const SubmitButton = styled(LoadingButton)(() => ({
  backgroundColor: "#004D40",
  padding: "10px 24px",
  borderRadius: "8px",
  color: "white",
  textTransform: "none",
  fontSize: 18,
  lineHeight: "28px",
  fontWeight: 500,
  "&:hover": {
    backgroundColor: "#004D40",
  },
  ".MuiCircularProgress-circle": {
    color: "#FFF",
  },
}));

export const UpdatePasswordButton = styled(LoadingButton)(({ theme }) => ({
  borderRadius: 8,
  padding: "8px 16px",
  textTransform: "none",
  color: "#FFF",
  backgroundColor: theme.palette.primary[600],
  "&:hover": {
    backgroundColor: theme.palette.primary[600],
  },
  ".MuiCircularProgress-circle": {
    color: "#FFF",
  },
}));

const OutlinedBtn = styled(SubmitButton)(() => ({
  border: "1px solid #D1D5DB",
  boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
  borderRadius: "6px",
  padding: "10px 24px",
  color: "#374151",
  backgroundColor: "white",
  fontSize: 18,
  fontSize: 18,
  lineHeight: "28px",
  fontWeight: 500,
  "&:hover": {
    backgroundColor: "white",
  },
  [`&.${buttonClasses.outlined}`]: {},
}));

export const OutlinedButton = (props) => {
  const { children, ...restProps } = props;
  return <OutlinedBtn {...restProps}>{children}</OutlinedBtn>;
};

export const Link = styled(NextLink, {
  shouldForwardProp: (prop) => prop !== "underlined",
})(({ underlined }) => ({
  color: "#257304",
  fontSize: 14,
  lineHeight: "20px",
  fontWeight: 400,
  textDecoration: underlined ? "underline" : "none",
}));

const InputWrapper = styled(Box)(() => {});

const ErrorMessage = styled(Box)(({ theme }) => ({
  color: theme.palette.error.main,
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "20px",
  marginTop: 8,
}));

const StyledInput = styled(InputBase)(({ theme }) => ({
  // marginTop: 12,
  boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
  fontSize: 14,
  lineHeight: "20px",
  border: " 1px solid #D1D5DB",
  borderRadius: "6px",
  [`& .${inputBaseClasses.input}`]: {
    padding: "10px 12px",
    color: "#111827",
    borderRadius: "6px",
  },
  [`&.${inputBaseClasses.error}`]: {
    border: `1px solid ${theme.palette.error[300]}`,
  },
  [`& .${inputBaseClasses.input}::placeholder`]: {
    opacity: 1,
    color: "#9CA3AF",
  },
}));

const WrapperRoot = styled(Box)(({ theme }) => ({}));

export const Input = (props) => {
  const { errorMsg, label, sx, mt, mb, pt, pb, className, ...restProps } =
    props;
  const { error } = props;

  return (
    <WrapperRoot sx={sx} mt={mt} mb={mb} pt={pt} pb={pb} className={className}>
      {label && (
        <label
          style={{
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "20px",
            marginBottom: 4,
          }}
        >
          {label}
        </label>
      )}
      <StyledInput {...restProps} />
      {error ? (
        <ErrorMessage>{errorMsg ? errorMsg : "Required"}</ErrorMessage>
      ) : (
        ""
      )}
    </WrapperRoot>
  );
};

export const PasswordInput = (props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const toggleVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <Input
      {...props}
      type={isPasswordVisible ? "text" : "password"}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            size="small"
            sx={{ marginRight: "12px" }}
            onClick={toggleVisibility}
          >
            {isPasswordVisible ? (
              <VisibilityOffOutlinedIcon sx={{ fontSize: "20px" }} />
            ) : (
              <VisibilityOutlinedIcon sx={{ fontSize: "20px" }} />
            )}
          </IconButton>
        </InputAdornment>
      }
    />
  );
};
