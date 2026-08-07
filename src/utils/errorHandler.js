import { ERROR_MESSAGES } from '../constants/messages';

export const getErrorMessage = error => {
  if (!error) {
    return ERROR_MESSAGES.UNKNOWN_ERROR;
  }

  if (error.code === 'ECONNABORTED') {
    return ERROR_MESSAGES.TIMEOUT_ERROR;
  }

  if (error.request && !error.response) {
    return ERROR_MESSAGES.NETWORK_ERROR;
  }

  // Server responded with an error status
  if (error.response) {
    const status = error.response.status;

    if (status === 404) {
      return ERROR_MESSAGES.NOT_FOUND;
    }

    if (status >= 500) {
      return ERROR_MESSAGES.SERVER_ERROR;
    }

    return error.response.data?.message || ERROR_MESSAGES.UNKNOWN_ERROR;
  }

  return error.message || ERROR_MESSAGES.UNKNOWN_ERROR;
};

export const normalizeError = error => ({
  message: getErrorMessage(error),
});
