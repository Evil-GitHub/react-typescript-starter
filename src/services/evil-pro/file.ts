// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /api/v1/knowledge/file/image/preview/${param0} */
export async function filePreview(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.filePreviewParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/v1/knowledge/file/image/preview/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/knowledge/file/upload */
export async function fileUpload(body: {}, options?: { [key: string]: any }) {
  return request<API.ResultFileUploadVO>('/api/v1/knowledge/file/upload', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
