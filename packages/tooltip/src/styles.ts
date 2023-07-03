import { styled } from "@kaiju-ui/theme";

export const TooltipContainer = styled("div", {
  width: "fit-content",
  height: "fit-content",
  position: "relative",
});

export const TooltipWrapper = styled("div", {
  position: "relative",
  fontFamily: "Poppins",
});

export const TooltipMessageContainer = styled("div", {
  position: "absolute",
  top: "-40px",
  transform: "translateX(-50%)",
  backgroundColor: "#fff",
  boxShadow: "0px 0px 5px 1px rgba(0,0,0,0.25)",
  zIndex: "9",
  borderRadius: "5px",
  color: "$text",
  padding: "5px 10px",

  ["&::after"]: {
    content: "",
    borderStyle: "solid",
    zIndex: "1",
    filter: "drop-shadow(0px 0px 2px rgba(0,0,0,0.25))",
    borderColor: "#fff transparent",
    borderWidth: "6px 6px 0 6px",
    bottom: "20px",
    top: "100%",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
  },
});

export const TooltipContentContainer = styled("div", {
  backgroundColor: "$primary",
  width: "50px",
  height: "50px",
  borderRadius: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$background",
  fontWeight: "800",
  fontSize: "28px",
});
