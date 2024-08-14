export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/create-room", "/your-rooms", "/browse", "/edit-room"],
};
