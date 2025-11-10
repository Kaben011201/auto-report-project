/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ResponseDataAttributes<T> {
  status: number;
  message: string | null;
  error?: string | null;
  data?: T | null;
}

export const ResponseData = {
  /**
   * Generates a standardized response object for successful operations.
   * @param data - The data to include in the response.
   * @param message - A message describing the response.
   * @returns A standardized response object.
   */
  ok: <T>(data: T, message = "Success"): ResponseDataAttributes<T> => ({
    status: 200,
    message,
    data,
  }),

  /**
   * Generates a standardized response object for created resources.
   * @param data - The data to include in the response.
   * @param message - A message describing the response.
   * @returns A standardized response object.
   */
  notFound: (message = "Data not found"): ResponseDataAttributes<null> => ({
    status: 404,
    message,
    data: null,
  }),

  /**
   * Generates a standardized response object for unauthorized access.
   * @param message - A message describing the response.
   * @returns A standardized response object.
   */
  unauthorized: (message = "Unauthorized"): ResponseDataAttributes<null> => ({
    status: 401,
    message,
    data: null,
  }),

  /**
   * Generates a standardized response object for created resources.
   * @param data - The data to include in the response.
   * @param message - A message describing the response.
   * @returns A standardized response object.
   */
  created: <T>(
    data: T,
    message = "Resource created"
  ): ResponseDataAttributes<T> => ({
    status: 201,
    message,
    data,
  }),

  /**
   * Generates a standardized response object for bad requests.
   * @param data - The data to include in the response.
   * @param message - A message describing the response.
   * @returns A standardized response object.
   */
  badRequest: (
    data: any = null,
    message = "Bad request"
  ): ResponseDataAttributes<null> => ({
    status: 400,
    message,
    data,
  }),

  /**
   * Generates a standardized response object for bad requests.
   * @param message - A message describing the response.
   * @returns A standardized response object.
   */
  error: (
    err: any,
    message = "Server error"
  ): ResponseDataAttributes<null> => ({
    status: 500,
    message,
    error: err,
    data: null,
  }),
};
