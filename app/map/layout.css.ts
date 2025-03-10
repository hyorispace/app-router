import { style } from "@vanilla-extract/css";

export const main = style({
  display: "flex",
  height: "100dvh",
});

export const header = style({
  width: 54,
  height: "100%",
  backgroundColor: "#19324B",
  padding: 20,
});

export const nav = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 20,
});

export const list = style({
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  width: 36,
  height: 36,
  color: "white",
  listStyle: "none",
  fontWeight: "700",
  padding: 6,
  borderRadius: 6,
  ":hover": {
    backgroundColor: "#B0F3E9",
    color: "#19A48F",
    cursor: "pointer",
  },
});

export const inner = style({
  flex: 1,
  height: "100%",
});
