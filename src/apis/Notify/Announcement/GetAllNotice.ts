import { fetchInstance } from "../../fetch";

const getAllNotice = async () => {
  const url = "/api/announcement/list";
  const options = {
    url: url,
    method: "get"
  };
  const response = await fetchInstance(options);
  return response;
};

export default getAllNotice;