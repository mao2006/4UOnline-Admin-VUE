import { fetchInstance } from "../fetch";

const createGeneralAdmin = async (username: string, password: string, key: string) => {
  const url = "/api/admin/create/key";
  const parameters = {
    username: username,
    password: password,
    key: key
  };
  const options = { url: url, method: "post", body: parameters };
  const response = await fetchInstance(options);
  return response;
};

export default createGeneralAdmin;
