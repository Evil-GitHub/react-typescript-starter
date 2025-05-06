// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /api/v1/knowledge/user/create */
export async function userCreate(body: API.UserCreateRequest, options?: { [key: string]: any }) {
  return request<any>('/api/v1/knowledge/user/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取当前用户 GET /api/v1/knowledge/user/currentUser */
export async function currentUser(options?: { [key: string]: any }) {
  return request<API.ResultUserVO>('/api/v1/knowledge/user/currentUser', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 用户禁用 PUT /api/v1/knowledge/user/disable/${param0} */
export async function userDisable(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.userDisableParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/v1/knowledge/user/disable/${param0}`, {
    method: 'PUT',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 用户启用 PUT /api/v1/knowledge/user/enable/${param0} */
export async function userEnable(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.userEnableParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/v1/knowledge/user/enable/${param0}`, {
    method: 'PUT',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 同步外部系统用户信息 PUT /api/v1/knowledge/user/flushed/external/user */
export async function flushedExternalUser(options?: { [key: string]: any }) {
  return request<any>('/api/v1/knowledge/user/flushed/external/user', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** 登录 POST /api/v1/knowledge/user/login */
export async function userLogin(body: API.LoginRequest, options?: { [key: string]: any }) {
  return request<API.ResultLoginVO>('/api/v1/knowledge/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/knowledge/user/page */
export async function userPage(body: API.CommonPageRequest, options?: { [key: string]: any }) {
  return request<API.ResultPageVOUserVO>('/api/v1/knowledge/user/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 重置密码 POST /api/v1/knowledge/user/reset/password/${param0} */
export async function userResetPassword(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.userResetPasswordParams,
  body: API.UserResetPasswordRequest,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/v1/knowledge/user/reset/password/${param0}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/knowledge/user/update */
export async function userUpdate(body: API.UserUpdateRequest, options?: { [key: string]: any }) {
  return request<any>('/api/v1/knowledge/user/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/knowledge/user/update/${param0} */
export async function userUpdateById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.userUpdateByIdParams,
  body: API.UserUpdateRequest,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/v1/knowledge/user/update/${param0}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 修改密码 POST /api/v1/knowledge/user/update/password */
export async function userUpdatePassword(
  body: API.UserUpdatePasswordRequest,
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/knowledge/user/update/password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
