import { fetchInstance } from "../../fetch";

interface parameters {
  id: number
}

const getNoticeDetail = async (parameters: parameters) => {
  const url = "/api/announcement";
  const options = {
    url: url,
    method: "get",
    body: parameters
  };
  const response = await fetchInstance(options);
  return response;
};

export default getNoticeDetail;