import { fetchInstance } from "../../fetch";

interface parameters {
  title: string;
  content: string;
  department: string
}

const releaseNotice = async (parameters: parameters) => {
  const url = "/api/announcement";
  const options = {
    url: url,
    method: "post",
    body: parameters
  };
  const response = await fetchInstance(options);
  return response;
};

export default releaseNotice;