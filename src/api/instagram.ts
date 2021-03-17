import axios from "axios";

const INSTAGRAM_ACCESS_TOKEN =
  "IGQVJXUUk4NmVRaDFhWUhBTDE5V2N4SXYtcTY4WUEtUUxFaFlmLWFaVkFjR2ljUFEyUGZASb0hKTFFKV2hCYlVrRjJlNVdMc0FTTHVERTlMcEF2MmlNR0pzQ2VGUE9sc0JPQ0FhcW5NdXVjWnRPaG94eAZDZD";

export default axios.create({
  baseURL: "https://graph.instagram.com/me/media",
  params: {
    fields: ["id", "caption", "media_type", "media_url", "permalink"].join(","),
    access_token: INSTAGRAM_ACCESS_TOKEN,
  },
});
