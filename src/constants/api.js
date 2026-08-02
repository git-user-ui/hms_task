export const API_CONFIG = {
  BASE_URL: 'https://6a5dae440ad09982aef74211.mockapi.io/api/doctors',
  TIMEOUT: 15000,
};

export const ENDPOINTS = {
  DOCTORS: '/',
  DOCTOR_BY_ID: id => `/${id}`,
};

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};
