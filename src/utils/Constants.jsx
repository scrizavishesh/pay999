import axios from "axios";

export const UithoutAuth = "https://auth.pay999.com/api/without-auth/v1/provider-list" 
export const API_URL = "https://auth.pay999.com/api/login/app/v1";
export const Recharge = "https://auth.pay999.com/api/recharge/v1"
export const BBPS = "https://auth.pay999.com/api/bbps/v1"
export const balance = "https://auth.pay999.com/"
export const History = "https://auth.pay999.com/api/history/v1"



export const Loginuse = async (requestData) => {
    axios.defaults.headers.common["Authorization"] = "";
  
    var response = await axios.post(`${API_URL}/login`, requestData);
    if (response) {
      return response;
    } else {
      return [];
    }
  }

  export const Register = async (requestData) => {
    axios.defaults.headers.common["Authorization"] = "";
  
    var response = await axios.post(`${API_URL}/register`, requestData);
    if (response) {
      return response;
    } else {
      return [];
    }
  }

  export const OutLog = async (requestData) => {
    axios.defaults.headers.common["Authorization"] = "";
  
    var response = await axios.post(`${API_URL}/logout`, requestData);
    if (response) {
      return response;
    } else {
      return [];
    }
  }

  export const confirmOTP = async (requestData) => {
    axios.defaults.headers.common["Authorization"] = "";
  
    var response = await axios.post(`${API_URL}/confirm-login`, requestData);
    if (response) {
      return response;
    } else {
      return [];
    }
  }

  export const resendOTP = async (requestData) => {
    axios.defaults.headers.common["Authorization"] = "";
  
    var response = await axios.post(`${API_URL}/resend-otp`, requestData);
    if (response) {
      return response;
    } else {
      return [];
    }
  }

  export const serviceLists = async (requestData) => {
    axios.defaults.headers.common["Authorization"] = "";
    var response = await axios.post(`${Recharge}/service-list`, requestData);
    if (response) {
      return response;
    } else {
      return [];
    }
  }

  export const findNumber = async (requestData) => {
    axios.defaults.headers.common["Authorization"] = "";
  
    var response = await axios.post(`${Recharge}/find-number`, requestData);
    if (response) {
      return response;
    } else {
      return [];
    }
  }


  export const rechargeNow = async (requestData) => {
    axios.defaults.headers.common["Authorization"] = "";
  
    var response = await axios.post(`${Recharge}/recharge-now`, requestData);
    if (response) {
      return response;
    } else {
      return [];
    }
  }


  export const providerLis = async (requestData) => {
    axios.defaults.headers.common["Authorization"] = "";
  
    var response = await axios.post(`${Recharge}/provider-list`, requestData);
    if (response) {
      return response;
    } else {
      return [];
    }
  }

  export const providerListWithout = async (requestData) => {
    axios.defaults.headers.common["Authorization"] = "";
  
    var response = await axios.post(`${UithoutAuth}`, requestData);
    if (response) {
      return response;
    } else {
      return [];
    }
  }

  export const providerValidation = async (requestData) => {
    axios.defaults.headers.common["Authorization"] = "";
  
    var response = await axios.post(`${BBPS}/provider-validation`, requestData);
    if (response) {
      return response;
    } else {
      return [];
    }
  }

  export const verifyBill = async (requestData) => {
    axios.defaults.headers.common["Authorization"] = "";
  
    var response = await axios.post(`${BBPS}/bill-verify`, requestData);
    if (response) {
      return response;
    } else {
      return [];
    }
  }

  export const payNowBills = async (requestData) => {
    axios.defaults.headers.common["Authorization"] = "";
  
    var response = await axios.post(`${BBPS}/pay-now`, requestData);
    if (response) {
      return response;
    } else {
      return [];
    }
  }

  export const checkBalance = async (requestData) => {
    axios.defaults.headers.common["Authorization"] = "";
  
    var response = await axios.post(`${balance}api/application/v1/check-balance`, requestData);
    if (response) {
      return response;
    } else {
      return [];
    }
  }

  export const AddBalance = async (requestData) => {
    axios.defaults.headers.common["Authorization"] = "";
  
    var response = await axios.post(`${balance}api/add-money/v1/create-order`, requestData);
    if (response) {
      return response;
    } else {
      return [];
    }
  }

  export const checkHistory = async (requestData, data) => {
    axios.defaults.headers.common["Authorization"] = "";
  
    var response = await axios.post(`${History}/history?page=${requestData?.current_page}&perpage=${requestData?.per_page}`, data);
    if (response) {
      return response;
    } else {
      return [];
    }
  }
