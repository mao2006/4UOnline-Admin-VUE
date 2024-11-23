import { fetchInstance } from "../fetch";

interface parameters {
  username: string,
  password: string,
  key: string
}

const createGeneralAdmin = async (parameters: parameters) => {
  const url = "/api/admin/create/key";
  const options = { url: url, method: "post", body: parameters };
  const response = await fetchInstance(options);
  return response;
};

export default createGeneralAdmin;
