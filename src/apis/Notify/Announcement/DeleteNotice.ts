import { fetchInstance } from "../../fetch";

interface parameters {
  id: string
}

const deleteNotice = async (parameters: parameters) => {
  const url = "/api/announcement";
  const options = {
    url: url,
    method: "delete",
    body: parameters
  };
  const response = await fetchInstance(options);
  return response;
};

export default deleteNotice;