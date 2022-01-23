import axios from "axios";
export default async function feedReducer(state, action) {
  switch (action.type) {
    case "UpdateFeed":
      const response = await axios.get("");
      return [...response.data];

    case "LikePost":
      break;

    default:
      return state;
  }
}
