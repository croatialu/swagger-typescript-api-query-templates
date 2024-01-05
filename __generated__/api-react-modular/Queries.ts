/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  MutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import { RequestParams } from "./http-client";

import { Pet } from "./Pet";

import { Store } from "./Store";

import { User } from "./User";

import { TypeApiResponse, TypeOrder, TypePet, TypeUser } from "./data-contracts";

/**
  Swagger Petstore
  1.0.6
  This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
*/

type CustomQueryOptions<T, E> = Omit<UseQueryOptions<AxiosResponse<T, E>>, "queryKey" | "queryFn">;
type CustomMutationOptions<T, E, V> = Omit<MutationOptions<AxiosResponse<T, E>, E, V>, "mutationFn">;

export const createPetApiQuery = (api: Pet<unknown>) => {
  /**
   * No description
   *
   * @tags pet
   * @name UploadFile
   * @summary uploads an image
   * @request POST:/pet/{petId}/uploadImage
   * @secure
   */
  function useUploadFileMutation(
    mutationOptions: CustomMutationOptions<
      TypeApiResponse,
      any,
      {
        petId: number;
        data: {
          /** Additional data to pass to server */
          additionalMetadata?: string;
          /** file to upload */
          file?: File;
        };
        requestParams?: RequestParams;
      }
    > = {},
  ) {
    return useMutation({
      ...mutationOptions,
      mutationFn: ((apiParams: {
        petId: number;
        data: {
          /** Additional data to pass to server */
          additionalMetadata?: string;
          /** file to upload */
          file?: File;
        };
        requestParams?: RequestParams;
      }) => {
        const { petId, data, requestParams = {} } = apiParams;

        // @ts-ignore
        return api.uploadFile(petId, data, requestParams);
      }) as any,
    }) as unknown as UseMutationResult<
      AxiosResponse<TypeApiResponse, any>,
      any,
      {
        petId: number;
        data: {
          /** Additional data to pass to server */
          additionalMetadata?: string;
          /** file to upload */
          file?: File;
        };
        requestParams?: RequestParams;
      },
      any
    >;
  }

  /**
   * No description
   *
   * @tags pet
   * @name AddPet
   * @summary Add a new pet to the store
   * @request POST:/pet
   * @secure
   */
  function useAddPetMutation(
    mutationOptions: CustomMutationOptions<any, void, { body: TypePet; requestParams?: RequestParams }> = {},
  ) {
    return useMutation({
      ...mutationOptions,
      mutationFn: ((apiParams: { body: TypePet; requestParams?: RequestParams }) => {
        const { body, requestParams = {} } = apiParams;

        // @ts-ignore
        return api.addPet(body, requestParams);
      }) as any,
    }) as unknown as UseMutationResult<
      AxiosResponse<any, void>,
      void,
      { body: TypePet; requestParams?: RequestParams },
      any
    >;
  }

  /**
   * No description
   *
   * @tags pet
   * @name UpdatePet
   * @summary Update an existing pet
   * @request PUT:/pet
   * @secure
   */
  function useUpdatePetMutation(
    mutationOptions: CustomMutationOptions<any, void, { body: TypePet; requestParams?: RequestParams }> = {},
  ) {
    return useMutation({
      ...mutationOptions,
      mutationFn: ((apiParams: { body: TypePet; requestParams?: RequestParams }) => {
        const { body, requestParams = {} } = apiParams;

        // @ts-ignore
        return api.updatePet(body, requestParams);
      }) as any,
    }) as unknown as UseMutationResult<
      AxiosResponse<any, void>,
      void,
      { body: TypePet; requestParams?: RequestParams },
      any
    >;
  }

  /**
   * @description Multiple status values can be provided with comma separated strings
   *
   * @tags pet
   * @name FindPetsByStatus
   * @summary Finds Pets by status
   * @request GET:/pet/findByStatus
   * @secure
   */
  function useFindPetsByStatus(
    apiParams: {
      query: {
        /** Status values that need to be considered for filter */
        status: ("available" | "pending" | "sold")[];
      };
      requestParams?: RequestParams;
    },
    queryOptions: CustomQueryOptions<TypePet[], void> = {},
  ) {
    const { query, requestParams = {} } = apiParams;
    return useQuery({
      ...queryOptions,
      queryKey: createFindPetsByStatusQueryKey({ query, requestParams }),
      queryFn: (() => {
        // @ts-ignore
        return api.findPetsByStatus(query, requestParams);
      }) as any,
    }) as unknown as UseQueryResult<AxiosResponse<TypePet[], void>, void>;
  }
  function createFindPetsByStatusQueryKey(apiParams: {
    query: {
      /** Status values that need to be considered for filter */
      status: ("available" | "pending" | "sold")[];
    };
    requestParams?: RequestParams;
  }) {
    const { query, requestParams = {} } = apiParams;
    return ["swagger-typescript-api", "pet", "get", "/pet/findByStatus", query, requestParams] as const;
  }

  /**
   * @description Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   *
   * @tags pet
   * @name FindPetsByTags
   * @summary Finds Pets by tags
   * @request GET:/pet/findByTags
   * @deprecated
   * @secure
   */
  function useFindPetsByTags(
    apiParams: {
      query: {
        /** Tags to filter by */
        tags: string[];
      };
      requestParams?: RequestParams;
    },
    queryOptions: CustomQueryOptions<TypePet[], void> = {},
  ) {
    const { query, requestParams = {} } = apiParams;
    return useQuery({
      ...queryOptions,
      queryKey: createFindPetsByTagsQueryKey({ query, requestParams }),
      queryFn: (() => {
        // @ts-ignore
        return api.findPetsByTags(query, requestParams);
      }) as any,
    }) as unknown as UseQueryResult<AxiosResponse<TypePet[], void>, void>;
  }
  function createFindPetsByTagsQueryKey(apiParams: {
    query: {
      /** Tags to filter by */
      tags: string[];
    };
    requestParams?: RequestParams;
  }) {
    const { query, requestParams = {} } = apiParams;
    return ["swagger-typescript-api", "pet", "get", "/pet/findByTags", query, requestParams] as const;
  }

  /**
   * @description Returns a single pet
   *
   * @tags pet
   * @name GetPetById
   * @summary Find pet by ID
   * @request GET:/pet/{petId}
   * @secure
   */
  function useGetPetById(
    apiParams: { petId: number; requestParams?: RequestParams },
    queryOptions: CustomQueryOptions<TypePet, void> = {},
  ) {
    const { petId, requestParams = {} } = apiParams;
    return useQuery({
      ...queryOptions,
      queryKey: createGetPetByIdQueryKey({ petId, requestParams }),
      queryFn: (() => {
        // @ts-ignore
        return api.getPetById(petId, requestParams);
      }) as any,
    }) as unknown as UseQueryResult<AxiosResponse<TypePet, void>, void>;
  }
  function createGetPetByIdQueryKey(apiParams: { petId: number; requestParams?: RequestParams }) {
    const { petId, requestParams = {} } = apiParams;
    return ["swagger-typescript-api", "pet", "get", "/pet/${petId}", petId, requestParams] as const;
  }

  /**
   * No description
   *
   * @tags pet
   * @name UpdatePetWithForm
   * @summary Updates a pet in the store with form data
   * @request POST:/pet/{petId}
   * @secure
   */
  function useUpdatePetWithFormMutation(
    mutationOptions: CustomMutationOptions<
      any,
      void,
      {
        petId: number;
        data: {
          /** Updated name of the pet */
          name?: string;
          /** Updated status of the pet */
          status?: string;
        };
        requestParams?: RequestParams;
      }
    > = {},
  ) {
    return useMutation({
      ...mutationOptions,
      mutationFn: ((apiParams: {
        petId: number;
        data: {
          /** Updated name of the pet */
          name?: string;
          /** Updated status of the pet */
          status?: string;
        };
        requestParams?: RequestParams;
      }) => {
        const { petId, data, requestParams = {} } = apiParams;

        // @ts-ignore
        return api.updatePetWithForm(petId, data, requestParams);
      }) as any,
    }) as unknown as UseMutationResult<
      AxiosResponse<any, void>,
      void,
      {
        petId: number;
        data: {
          /** Updated name of the pet */
          name?: string;
          /** Updated status of the pet */
          status?: string;
        };
        requestParams?: RequestParams;
      },
      any
    >;
  }

  /**
   * No description
   *
   * @tags pet
   * @name DeletePet
   * @summary Deletes a pet
   * @request DELETE:/pet/{petId}
   * @secure
   */
  function useDeletePetMutation(
    mutationOptions: CustomMutationOptions<any, void, { petId: number; requestParams?: RequestParams }> = {},
  ) {
    return useMutation({
      ...mutationOptions,
      mutationFn: ((apiParams: { petId: number; requestParams?: RequestParams }) => {
        const { petId, requestParams = {} } = apiParams;

        // @ts-ignore
        return api.deletePet(petId, requestParams);
      }) as any,
    }) as unknown as UseMutationResult<
      AxiosResponse<any, void>,
      void,
      { petId: number; requestParams?: RequestParams },
      any
    >;
  }

  return {
    useQueryUpdate: usePetApiQueryUpdate,
    useUploadFileMutation,
    useAddPetMutation,
    useUpdatePetMutation,
    useFindPetsByStatus,
    createFindPetsByStatusQueryKey,
    useFindPetsByTags,
    createFindPetsByTagsQueryKey,
    useGetPetById,
    createGetPetByIdQueryKey,
    useUpdatePetWithFormMutation,
    useDeletePetMutation,
  };
};

export function usePetApiQueryUpdate() {
  const queryClient = useQueryClient();

  function setQueryData(
    queryKey: readonly [
      "swagger-typescript-api",
      "pet",
      "post",
      "/pet/${petId}/uploadImage",
      number,
      {
        /** Additional data to pass to server */
        additionalMetadata?: string;
        /** file to upload */
        file?: File;
      },
      RequestParams,
    ],
    updater: (data: AxiosResponse<TypeApiResponse, any>) => AxiosResponse<TypeApiResponse, any>,
  ): Promise<AxiosResponse<TypeApiResponse, any>>;
  function setQueryData(
    queryKey: readonly ["swagger-typescript-api", "pet", "post", "/pet", TypePet, RequestParams],
    updater: (data: AxiosResponse<any, void>) => AxiosResponse<any, void>,
  ): Promise<AxiosResponse<any, void>>;
  function setQueryData(
    queryKey: readonly ["swagger-typescript-api", "pet", "put", "/pet", TypePet, RequestParams],
    updater: (data: AxiosResponse<any, void>) => AxiosResponse<any, void>,
  ): Promise<AxiosResponse<any, void>>;
  function setQueryData(
    queryKey: readonly [
      "swagger-typescript-api",
      "pet",
      "get",
      "/pet/findByStatus",
      {
        /** Status values that need to be considered for filter */
        status: ("available" | "pending" | "sold")[];
      },
      RequestParams,
    ],
    updater: (data: AxiosResponse<TypePet[], void>) => AxiosResponse<TypePet[], void>,
  ): Promise<AxiosResponse<TypePet[], void>>;
  function setQueryData(
    queryKey: readonly [
      "swagger-typescript-api",
      "pet",
      "get",
      "/pet/findByTags",
      {
        /** Tags to filter by */
        tags: string[];
      },
      RequestParams,
    ],
    updater: (data: AxiosResponse<TypePet[], void>) => AxiosResponse<TypePet[], void>,
  ): Promise<AxiosResponse<TypePet[], void>>;
  function setQueryData(
    queryKey: readonly ["swagger-typescript-api", "pet", "get", "/pet/${petId}", number, RequestParams],
    updater: (data: AxiosResponse<TypePet, void>) => AxiosResponse<TypePet, void>,
  ): Promise<AxiosResponse<TypePet, void>>;
  function setQueryData(
    queryKey: readonly [
      "swagger-typescript-api",
      "pet",
      "post",
      "/pet/${petId}",
      number,
      {
        /** Updated name of the pet */
        name?: string;
        /** Updated status of the pet */
        status?: string;
      },
      RequestParams,
    ],
    updater: (data: AxiosResponse<any, void>) => AxiosResponse<any, void>,
  ): Promise<AxiosResponse<any, void>>;
  function setQueryData(
    queryKey: readonly ["swagger-typescript-api", "pet", "delete", "/pet/${petId}", number, RequestParams],
    updater: (data: AxiosResponse<any, void>) => AxiosResponse<any, void>,
  ): Promise<AxiosResponse<any, void>>;
  function setQueryData(queryKey: any, updater: any) {
    return queryClient.setQueryData(queryKey, updater);
  }

  return setQueryData;
}

export const createStoreApiQuery = (api: Store<unknown>) => {
  /**
   * No description
   *
   * @tags store
   * @name PlaceOrder
   * @summary Place an order for a pet
   * @request POST:/store/order
   */
  function usePlaceOrderMutation(
    mutationOptions: CustomMutationOptions<TypeOrder, void, { body: TypeOrder; requestParams?: RequestParams }> = {},
  ) {
    return useMutation({
      ...mutationOptions,
      mutationFn: ((apiParams: { body: TypeOrder; requestParams?: RequestParams }) => {
        const { body, requestParams = {} } = apiParams;

        // @ts-ignore
        return api.placeOrder(body, requestParams);
      }) as any,
    }) as unknown as UseMutationResult<
      AxiosResponse<TypeOrder, void>,
      void,
      { body: TypeOrder; requestParams?: RequestParams },
      any
    >;
  }

  /**
   * @description For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
   *
   * @tags store
   * @name GetOrderById
   * @summary Find purchase order by ID
   * @request GET:/store/order/{orderId}
   */
  function useGetOrderById(
    apiParams: { orderId: number; requestParams?: RequestParams },
    queryOptions: CustomQueryOptions<TypeOrder, void> = {},
  ) {
    const { orderId, requestParams = {} } = apiParams;
    return useQuery({
      ...queryOptions,
      queryKey: createGetOrderByIdQueryKey({ orderId, requestParams }),
      queryFn: (() => {
        // @ts-ignore
        return api.getOrderById(orderId, requestParams);
      }) as any,
    }) as unknown as UseQueryResult<AxiosResponse<TypeOrder, void>, void>;
  }
  function createGetOrderByIdQueryKey(apiParams: { orderId: number; requestParams?: RequestParams }) {
    const { orderId, requestParams = {} } = apiParams;
    return ["swagger-typescript-api", "store", "get", "/store/order/${orderId}", orderId, requestParams] as const;
  }

  /**
   * @description For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
   *
   * @tags store
   * @name DeleteOrder
   * @summary Delete purchase order by ID
   * @request DELETE:/store/order/{orderId}
   */
  function useDeleteOrderMutation(
    mutationOptions: CustomMutationOptions<any, void, { orderId: number; requestParams?: RequestParams }> = {},
  ) {
    return useMutation({
      ...mutationOptions,
      mutationFn: ((apiParams: { orderId: number; requestParams?: RequestParams }) => {
        const { orderId, requestParams = {} } = apiParams;

        // @ts-ignore
        return api.deleteOrder(orderId, requestParams);
      }) as any,
    }) as unknown as UseMutationResult<
      AxiosResponse<any, void>,
      void,
      { orderId: number; requestParams?: RequestParams },
      any
    >;
  }

  /**
   * @description Returns a map of status codes to quantities
   *
   * @tags store
   * @name GetInventory
   * @summary Returns pet inventories by status
   * @request GET:/store/inventory
   * @secure
   */
  function useGetInventory(
    apiParams: { requestParams?: RequestParams },
    queryOptions: CustomQueryOptions<Record<string, number>, any> = {},
  ) {
    const { requestParams = {} } = apiParams;
    return useQuery({
      ...queryOptions,
      queryKey: createGetInventoryQueryKey({ requestParams }),
      queryFn: (() => {
        // @ts-ignore
        return api.getInventory(requestParams);
      }) as any,
    }) as unknown as UseQueryResult<AxiosResponse<Record<string, number>, any>, any>;
  }
  function createGetInventoryQueryKey(apiParams: { requestParams?: RequestParams }) {
    const { requestParams = {} } = apiParams;
    return ["swagger-typescript-api", "store", "get", "/store/inventory", requestParams] as const;
  }

  return {
    useQueryUpdate: useStoreApiQueryUpdate,
    usePlaceOrderMutation,
    useGetOrderById,
    createGetOrderByIdQueryKey,
    useDeleteOrderMutation,
    useGetInventory,
    createGetInventoryQueryKey,
  };
};

export function useStoreApiQueryUpdate() {
  const queryClient = useQueryClient();

  function setQueryData(
    queryKey: readonly ["swagger-typescript-api", "store", "post", "/store/order", TypeOrder, RequestParams],
    updater: (data: AxiosResponse<TypeOrder, void>) => AxiosResponse<TypeOrder, void>,
  ): Promise<AxiosResponse<TypeOrder, void>>;
  function setQueryData(
    queryKey: readonly ["swagger-typescript-api", "store", "get", "/store/order/${orderId}", number, RequestParams],
    updater: (data: AxiosResponse<TypeOrder, void>) => AxiosResponse<TypeOrder, void>,
  ): Promise<AxiosResponse<TypeOrder, void>>;
  function setQueryData(
    queryKey: readonly ["swagger-typescript-api", "store", "delete", "/store/order/${orderId}", number, RequestParams],
    updater: (data: AxiosResponse<any, void>) => AxiosResponse<any, void>,
  ): Promise<AxiosResponse<any, void>>;
  function setQueryData(
    queryKey: readonly ["swagger-typescript-api", "store", "get", "/store/inventory", RequestParams],
    updater: (data: AxiosResponse<Record<string, number>, any>) => AxiosResponse<Record<string, number>, any>,
  ): Promise<AxiosResponse<Record<string, number>, any>>;
  function setQueryData(queryKey: any, updater: any) {
    return queryClient.setQueryData(queryKey, updater);
  }

  return setQueryData;
}

export const createUserApiQuery = (api: User<unknown>) => {
  /**
   * No description
   *
   * @tags user
   * @name CreateUsersWithArrayInput
   * @summary Creates list of users with given input array
   * @request POST:/user/createWithArray
   */
  function useCreateUsersWithArrayInputMutation(
    mutationOptions: CustomMutationOptions<any, void, { body: TypeUser[]; requestParams?: RequestParams }> = {},
  ) {
    return useMutation({
      ...mutationOptions,
      mutationFn: ((apiParams: { body: TypeUser[]; requestParams?: RequestParams }) => {
        const { body, requestParams = {} } = apiParams;

        // @ts-ignore
        return api.createUsersWithArrayInput(body, requestParams);
      }) as any,
    }) as unknown as UseMutationResult<
      AxiosResponse<any, void>,
      void,
      { body: TypeUser[]; requestParams?: RequestParams },
      any
    >;
  }

  /**
   * No description
   *
   * @tags user
   * @name CreateUsersWithListInput
   * @summary Creates list of users with given input array
   * @request POST:/user/createWithList
   */
  function useCreateUsersWithListInputMutation(
    mutationOptions: CustomMutationOptions<any, void, { body: TypeUser[]; requestParams?: RequestParams }> = {},
  ) {
    return useMutation({
      ...mutationOptions,
      mutationFn: ((apiParams: { body: TypeUser[]; requestParams?: RequestParams }) => {
        const { body, requestParams = {} } = apiParams;

        // @ts-ignore
        return api.createUsersWithListInput(body, requestParams);
      }) as any,
    }) as unknown as UseMutationResult<
      AxiosResponse<any, void>,
      void,
      { body: TypeUser[]; requestParams?: RequestParams },
      any
    >;
  }

  /**
   * No description
   *
   * @tags user
   * @name GetUserByName
   * @summary Get user by user name
   * @request GET:/user/{username}
   */
  function useGetUserByName(
    apiParams: { username: string; requestParams?: RequestParams },
    queryOptions: CustomQueryOptions<TypeUser, void> = {},
  ) {
    const { username, requestParams = {} } = apiParams;
    return useQuery({
      ...queryOptions,
      queryKey: createGetUserByNameQueryKey({ username, requestParams }),
      queryFn: (() => {
        // @ts-ignore
        return api.getUserByName(username, requestParams);
      }) as any,
    }) as unknown as UseQueryResult<AxiosResponse<TypeUser, void>, void>;
  }
  function createGetUserByNameQueryKey(apiParams: { username: string; requestParams?: RequestParams }) {
    const { username, requestParams = {} } = apiParams;
    return ["swagger-typescript-api", "user", "get", "/user/${username}", username, requestParams] as const;
  }

  /**
   * @description This can only be done by the logged in user.
   *
   * @tags user
   * @name UpdateUser
   * @summary Updated user
   * @request PUT:/user/{username}
   */
  function useUpdateUserMutation(
    mutationOptions: CustomMutationOptions<
      any,
      void,
      { username: string; body: TypeUser; requestParams?: RequestParams }
    > = {},
  ) {
    return useMutation({
      ...mutationOptions,
      mutationFn: ((apiParams: { username: string; body: TypeUser; requestParams?: RequestParams }) => {
        const { username, body, requestParams = {} } = apiParams;

        // @ts-ignore
        return api.updateUser(username, body, requestParams);
      }) as any,
    }) as unknown as UseMutationResult<
      AxiosResponse<any, void>,
      void,
      { username: string; body: TypeUser; requestParams?: RequestParams },
      any
    >;
  }

  /**
   * @description This can only be done by the logged in user.
   *
   * @tags user
   * @name DeleteUser
   * @summary Delete user
   * @request DELETE:/user/{username}
   */
  function useDeleteUserMutation(
    mutationOptions: CustomMutationOptions<any, void, { username: string; requestParams?: RequestParams }> = {},
  ) {
    return useMutation({
      ...mutationOptions,
      mutationFn: ((apiParams: { username: string; requestParams?: RequestParams }) => {
        const { username, requestParams = {} } = apiParams;

        // @ts-ignore
        return api.deleteUser(username, requestParams);
      }) as any,
    }) as unknown as UseMutationResult<
      AxiosResponse<any, void>,
      void,
      { username: string; requestParams?: RequestParams },
      any
    >;
  }

  /**
   * No description
   *
   * @tags user
   * @name LoginUser
   * @summary Logs user into the system
   * @request GET:/user/login
   */
  function useLoginUser(
    apiParams: {
      query: {
        /** The user name for login */
        username: string;
        /** The password for login in clear text */
        password: string;
      };
      requestParams?: RequestParams;
    },
    queryOptions: CustomQueryOptions<string, void> = {},
  ) {
    const { query, requestParams = {} } = apiParams;
    return useQuery({
      ...queryOptions,
      queryKey: createLoginUserQueryKey({ query, requestParams }),
      queryFn: (() => {
        // @ts-ignore
        return api.loginUser(query, requestParams);
      }) as any,
    }) as unknown as UseQueryResult<AxiosResponse<string, void>, void>;
  }
  function createLoginUserQueryKey(apiParams: {
    query: {
      /** The user name for login */
      username: string;
      /** The password for login in clear text */
      password: string;
    };
    requestParams?: RequestParams;
  }) {
    const { query, requestParams = {} } = apiParams;
    return ["swagger-typescript-api", "user", "get", "/user/login", query, requestParams] as const;
  }

  /**
   * No description
   *
   * @tags user
   * @name LogoutUser
   * @summary Logs out current logged in user session
   * @request GET:/user/logout
   */
  function useLogoutUser(
    apiParams: { requestParams?: RequestParams },
    queryOptions: CustomQueryOptions<any, void> = {},
  ) {
    const { requestParams = {} } = apiParams;
    return useQuery({
      ...queryOptions,
      queryKey: createLogoutUserQueryKey({ requestParams }),
      queryFn: (() => {
        // @ts-ignore
        return api.logoutUser(requestParams);
      }) as any,
    }) as unknown as UseQueryResult<AxiosResponse<any, void>, void>;
  }
  function createLogoutUserQueryKey(apiParams: { requestParams?: RequestParams }) {
    const { requestParams = {} } = apiParams;
    return ["swagger-typescript-api", "user", "get", "/user/logout", requestParams] as const;
  }

  /**
   * @description This can only be done by the logged in user.
   *
   * @tags user
   * @name CreateUser
   * @summary Create user
   * @request POST:/user
   */
  function useCreateUserMutation(
    mutationOptions: CustomMutationOptions<any, void, { body: TypeUser; requestParams?: RequestParams }> = {},
  ) {
    return useMutation({
      ...mutationOptions,
      mutationFn: ((apiParams: { body: TypeUser; requestParams?: RequestParams }) => {
        const { body, requestParams = {} } = apiParams;

        // @ts-ignore
        return api.createUser(body, requestParams);
      }) as any,
    }) as unknown as UseMutationResult<
      AxiosResponse<any, void>,
      void,
      { body: TypeUser; requestParams?: RequestParams },
      any
    >;
  }

  return {
    useQueryUpdate: useUserApiQueryUpdate,
    useCreateUsersWithArrayInputMutation,
    useCreateUsersWithListInputMutation,
    useGetUserByName,
    createGetUserByNameQueryKey,
    useUpdateUserMutation,
    useDeleteUserMutation,
    useLoginUser,
    createLoginUserQueryKey,
    useLogoutUser,
    createLogoutUserQueryKey,
    useCreateUserMutation,
  };
};

export function useUserApiQueryUpdate() {
  const queryClient = useQueryClient();

  function setQueryData(
    queryKey: readonly ["swagger-typescript-api", "user", "post", "/user/createWithArray", TypeUser[], RequestParams],
    updater: (data: AxiosResponse<any, void>) => AxiosResponse<any, void>,
  ): Promise<AxiosResponse<any, void>>;
  function setQueryData(
    queryKey: readonly ["swagger-typescript-api", "user", "post", "/user/createWithList", TypeUser[], RequestParams],
    updater: (data: AxiosResponse<any, void>) => AxiosResponse<any, void>,
  ): Promise<AxiosResponse<any, void>>;
  function setQueryData(
    queryKey: readonly ["swagger-typescript-api", "user", "get", "/user/${username}", string, RequestParams],
    updater: (data: AxiosResponse<TypeUser, void>) => AxiosResponse<TypeUser, void>,
  ): Promise<AxiosResponse<TypeUser, void>>;
  function setQueryData(
    queryKey: readonly ["swagger-typescript-api", "user", "put", "/user/${username}", string, TypeUser, RequestParams],
    updater: (data: AxiosResponse<any, void>) => AxiosResponse<any, void>,
  ): Promise<AxiosResponse<any, void>>;
  function setQueryData(
    queryKey: readonly ["swagger-typescript-api", "user", "delete", "/user/${username}", string, RequestParams],
    updater: (data: AxiosResponse<any, void>) => AxiosResponse<any, void>,
  ): Promise<AxiosResponse<any, void>>;
  function setQueryData(
    queryKey: readonly [
      "swagger-typescript-api",
      "user",
      "get",
      "/user/login",
      {
        /** The user name for login */
        username: string;
        /** The password for login in clear text */
        password: string;
      },
      RequestParams,
    ],
    updater: (data: AxiosResponse<string, void>) => AxiosResponse<string, void>,
  ): Promise<AxiosResponse<string, void>>;
  function setQueryData(
    queryKey: readonly ["swagger-typescript-api", "user", "get", "/user/logout", RequestParams],
    updater: (data: AxiosResponse<any, void>) => AxiosResponse<any, void>,
  ): Promise<AxiosResponse<any, void>>;
  function setQueryData(
    queryKey: readonly ["swagger-typescript-api", "user", "post", "/user", TypeUser, RequestParams],
    updater: (data: AxiosResponse<any, void>) => AxiosResponse<any, void>,
  ): Promise<AxiosResponse<any, void>>;
  function setQueryData(queryKey: any, updater: any) {
    return queryClient.setQueryData(queryKey, updater);
  }

  return setQueryData;
}

export const createApiQuery = (modules: { pet: Pet; store: Store; user: User }) => {
  const { pet, store, user } = modules;

  return {
    pet: createPetApiQuery(pet),
    store: createStoreApiQuery(store),
    user: createUserApiQuery(user),
  };
};
