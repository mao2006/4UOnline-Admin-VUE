import { fetchInstance } from "../../fetch";

interface parameters {
  id: number,
  title: string,
  content: string,
  department: string
}

const reviceNotice = async (parameters: parameters) => {
  const url = "/api/announcement";
  const options = {
    url: url,
    method: "put",
    body: parameters
  };
  const response = await fetchInstance(options);
  return response;
};

export default reviceNotice;