// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /api/v1/knowledge/department/batch/remove */
export async function departmentBatchRemove(
  body: API.BatchIdRequest,
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/knowledge/department/batch/remove', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/v1/knowledge/department/batch/user/add/${param0} */
export async function departmentBatchUserAdd(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.departmentBatchUserAddParams,
  body: API.BatchIdRequest,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/v1/knowledge/department/batch/user/add/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/v1/knowledge/department/batch/user/remove/${param0} */
export async function departmentBatchUserRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.departmentBatchUserRemoveParams,
  body: API.BatchIdRequest,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/v1/knowledge/department/batch/user/remove/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/knowledge/department/create */
export async function departmentCreate(
  body: API.DepartmentCURequest,
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/knowledge/department/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/knowledge/department/page */
export async function departmentPage(
  body: API.CommonPageRequest,
  options?: { [key: string]: any },
) {
  return request<API.ResultPageVODepartmentVO>('/api/v1/knowledge/department/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/v1/knowledge/department/update/${param0} */
export async function departmentUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.departmentUpdateParams,
  body: API.DepartmentCURequest,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/v1/knowledge/department/update/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
