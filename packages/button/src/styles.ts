import { VariantProps } from "@stitches/react";
import { styled } from "@kaiju-ui/theme";

export const Container = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  width: "100%",
  height: "40px",
  padding: "10px",

  border: "none",
  borderRadius: "5px",
  backgroundColor: "#fff",
  color: "$primary",
  fontWeight: "700",
  transition: "all .2s ease",
  zIndex: "3",

  overflow: "hidden",

  svg: {
    marginRight: "10px",
    marginLeft: "0",
  },

  "&:hover": {
    color: "white",

    "&:before": {
      width: "100%",
    },
  },

  "&:disabled": {
    pointerEvents: "none",
    cursor: "not-allowed",
  },

  variants: {
    loading: {
      true: {
        "&:after": {
          backgroundColor: "$gray5",
        },
      },
    },
    variant: {
      primary: {
        backgroundColor: "$primary !important",
        color: "$gray1",

        "&:hover": {
          backgroundColor: "rgb(215, 78, 0) !important",
          boxShadow: "0 0 5px 1px rgba(255, 103, 56, 0.3) ",
        },

        "&:disabled": {
          backgroundColor: "$gray8 !important",
        },
      },
      secondary: {
        backgroundColor: "white !important",
        color: "$primary",

        "&:hover": {
          color: "rgba(255, 103, 56, 0.6) !important",
          backgroundColor: "rgba(201, 201, 201, 1)",
          boxShadow: "0 0 5px 1px rgba(255, 103, 56, 0.3) ",
        },

        "&:disabled": {
          color: "$gray8 !important",
        },
      },
      alternative: {
        backgroundColor: "transparent",
        border: "1px solid $primary  !important",
        color: "$primary !important",

        "&:hover": {
          backgroundColor: "rgba(255, 103, 56, 0.1) !important",
          boxShadow: "0 0 2px 1px rgba(255, 103, 56, 0.2) ",
        },

        "&:disabled": {
          border: "1px solid $gray8 !important",
          color: "$gray8 !important",
        },
      },
      ghost: {
        backgroundColor: "transparent !important",
        border: "none",
        color: "$gray",

        "&:hover": {
          color: "$primary",
        },

        "&:disabled": {
          color: "$gray7",
        },
      },
    },
  },
});

export type ButtonVariants = VariantProps<typeof Container>;
