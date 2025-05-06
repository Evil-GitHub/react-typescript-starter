// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /api/v1/knowledge/recycle/page */
export async function recyclePage(body: API.CommonPageRequest, options?: { [key: string]: any }) {
  return request<API.ResultPageVORecycleFileVO>('/api/v1/knowledge/recycle/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/knowledge/recycle/recover */
export async function recycleRecover(body: API.BatchIdRequest, options?: { [key: string]: any }) {
  return request<any>('/api/v1/knowledge/recycle/recover', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
