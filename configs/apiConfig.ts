const API_BASE_URL = process.env.BASE_URL || "http://novaitgroup.ir";

const API_URLS = {
  login: `${API_BASE_URL}/auth/login`,
  signup: `${API_BASE_URL}/register`,
  isActive: `${API_BASE_URL}/panel/isActive`,
  sendSMS: `${API_BASE_URL}/panel/sendSms`,
  verify: `${API_BASE_URL}/panel/verify`,
  completeUser: `${API_BASE_URL}/panel/completeUser`,
  uploadScv: `${API_BASE_URL}/panel/goods/upload-csv`,
  getGoods: `${API_BASE_URL}/panel/goods/getAll`,
};

export default API_URLS;
