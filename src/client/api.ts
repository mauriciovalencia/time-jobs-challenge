/* tslint:disable */
/* eslint-disable */

import { Configuration } from "./configuration";
import globalAxios, { AxiosPromise, AxiosInstance } from "axios";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from "./common";
// @ts-ignore
import { BASE_PATH, RequestArgs, BaseAPI, RequiredError } from "./base";
import BeerEntity from "../entities/BeerEntity";

export const BasicErrorControllerApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary error
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    errorUsingDELETE: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/error`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "DELETE",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary error
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    errorUsingGET: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/error`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary error
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    errorUsingHEAD: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/error`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "HEAD",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary error
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    errorUsingOPTIONS: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/error`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "OPTIONS",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary error
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    errorUsingPATCH: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/error`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "PATCH",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary error
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    errorUsingPOST: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/error`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary error
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    errorUsingPUT: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/error`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "PUT",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

export const BasicErrorControllerApiFp = function (
  configuration?: Configuration
) {
  const localVarAxiosParamCreator =
    BasicErrorControllerApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @summary error
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async errorUsingDELETE(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<{ [key: string]: object }>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.errorUsingDELETE(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @summary error
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async errorUsingGET(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<{ [key: string]: object }>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.errorUsingGET(
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @summary error
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async errorUsingHEAD(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<{ [key: string]: object }>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.errorUsingHEAD(
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @summary error
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async errorUsingOPTIONS(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<{ [key: string]: object }>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.errorUsingOPTIONS(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @summary error
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async errorUsingPATCH(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<{ [key: string]: object }>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.errorUsingPATCH(
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @summary error
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async errorUsingPOST(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<{ [key: string]: object }>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.errorUsingPOST(
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @summary error
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async errorUsingPUT(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<{ [key: string]: object }>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.errorUsingPUT(
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
  };
};

export const BasicErrorControllerApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = BasicErrorControllerApiFp(configuration);
  return {
    /**
     *
     * @summary error
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    errorUsingDELETE(options?: any): AxiosPromise<{ [key: string]: object }> {
      return localVarFp
        .errorUsingDELETE(options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary error
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    errorUsingGET(options?: any): AxiosPromise<{ [key: string]: object }> {
      return localVarFp
        .errorUsingGET(options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary error
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    errorUsingHEAD(options?: any): AxiosPromise<{ [key: string]: object }> {
      return localVarFp
        .errorUsingHEAD(options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary error
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    errorUsingOPTIONS(options?: any): AxiosPromise<{ [key: string]: object }> {
      return localVarFp
        .errorUsingOPTIONS(options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary error
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    errorUsingPATCH(options?: any): AxiosPromise<{ [key: string]: object }> {
      return localVarFp
        .errorUsingPATCH(options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary error
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    errorUsingPOST(options?: any): AxiosPromise<{ [key: string]: object }> {
      return localVarFp
        .errorUsingPOST(options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary error
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    errorUsingPUT(options?: any): AxiosPromise<{ [key: string]: object }> {
      return localVarFp
        .errorUsingPUT(options)
        .then((request) => request(axios, basePath));
    },
  };
};

export class BasicErrorControllerApi extends BaseAPI {
  /**
   *
   * @summary error
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BasicErrorControllerApi
   */
  public errorUsingDELETE(options?: any) {
    return BasicErrorControllerApiFp(this.configuration)
      .errorUsingDELETE(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary error
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BasicErrorControllerApi
   */
  public errorUsingGET(options?: any) {
    return BasicErrorControllerApiFp(this.configuration)
      .errorUsingGET(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary error
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BasicErrorControllerApi
   */
  public errorUsingHEAD(options?: any) {
    return BasicErrorControllerApiFp(this.configuration)
      .errorUsingHEAD(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary error
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BasicErrorControllerApi
   */
  public errorUsingOPTIONS(options?: any) {
    return BasicErrorControllerApiFp(this.configuration)
      .errorUsingOPTIONS(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary error
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BasicErrorControllerApi
   */
  public errorUsingPATCH(options?: any) {
    return BasicErrorControllerApiFp(this.configuration)
      .errorUsingPATCH(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary error
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BasicErrorControllerApi
   */
  public errorUsingPOST(options?: any) {
    return BasicErrorControllerApiFp(this.configuration)
      .errorUsingPOST(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary error
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BasicErrorControllerApi
   */
  public errorUsingPUT(options?: any) {
    return BasicErrorControllerApiFp(this.configuration)
      .errorUsingPUT(options)
      .then((request) => request(this.axios, this.basePath));
  }
}

export const BeerControllerApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    getBeerUsingGET: async (
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `beers`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

export const BeerControllerApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    BeerControllerApiAxiosParamCreator(configuration);
  return {

    /**
     * 
     * @param options 
     * @returns 
     */
    async getBeerUsingGET(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<[BeerEntity]>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getBeerUsingGET(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
  };
};

export const BeerControllerApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = BeerControllerApiFp(configuration);
  return {
    getBeerUsingGET(
      options?: any
    ): AxiosPromise<[BeerEntity]> {
      return localVarFp
        .getBeerUsingGET(options)
        .then((request) => request(axios, basePath));
    },
  };
};

export class BeerControllerApi extends BaseAPI {

  /**
   * 
   * @param options 
   * @returns 
   */
  public getBeerUsingGET(options?: any) {
    return BeerControllerApiFp(this.configuration)
      .getBeerUsingGET(options)
      .then((request) => request(this.axios, this.basePath));
  }
}
