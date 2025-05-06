// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /api/v1/knowledge/addMember/${param0} */
export async function knowledgeAddMember(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.knowledgeAddMemberParams,
  body: API.KnowledgeAddMemberRequest,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/v1/knowledge/addMember/${param0}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/knowledge/batch/document/remove */
export async function knowledgeDocumentBatchRemove(
  body: API.BatchIdRequest,
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/knowledge/batch/document/remove', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/knowledge/batch/remove */
export async function knowledgeBatchRemove(
  body: API.BatchIdRequest,
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/knowledge/batch/remove', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/v1/knowledge/by/${param0} */
export async function knowledgeFindById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.knowledgeFindByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ResultKnowledgeVO>(`/api/v1/knowledge/by/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/v1/knowledge/cover/all */
export async function knowledgeAllCover(options?: { [key: string]: any }) {
  return request<API.ResultListKnowledgeBackgroundVO>('/api/v1/knowledge/cover/all', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/knowledge/create */
export async function knowledgeCreate(
  body: API.KnowledgeCURequest,
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/knowledge/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/knowledge/create/document/${param0} */
export async function knowledgeCreateDocument(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.knowledgeCreateDocumentParams,
  body: API.KnowledgeCUDocumentRequest,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/v1/knowledge/create/document/${param0}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/knowledge/deleteMember/${param0} */
export async function knowledgeDeleteMember(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.knowledgeDeleteMemberParams,
  body: API.KnowledgeDeleteMemberRequest,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/v1/knowledge/deleteMember/${param0}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 根据id查询目录 GET /api/v1/knowledge/document/by/${param0} */
export async function documentFindById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.documentFindByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ResultDocumentVO>(`/api/v1/knowledge/document/by/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/v1/knowledge/document/content/${param0} */
export async function knowledgeDocumentContent(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.knowledgeDocumentContentParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ResultDocumentContentVO>(`/api/v1/knowledge/document/content/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/knowledge/document/export */
export async function knowledgeDocumentExport(
  body: API.KnowledgeDocumentExportRequest,
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/knowledge/document/export', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/v1/knowledge/document/export/download/${param0} */
export async function knowledgeDocumentExportDownload(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.knowledgeDocumentExportDownloadParams,
  options?: { [key: string]: any },
) {
  const { exportId: param0, ...queryParams } = params;
  return request<any>(`/api/v1/knowledge/document/export/download/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/knowledge/document/export/page */
export async function knowledgeDocumentExportPage(
  body: API.CommonPageRequest,
  options?: { [key: string]: any },
) {
  return request<API.ResultPageVODocumentExportHistoryPageVO>(
    '/api/v1/knowledge/document/export/page',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 POST /api/v1/knowledge/document/include */
export async function knowledgeDocumentInclude(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.knowledgeDocumentIncludeParams,
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/knowledge/document/include', {
    method: 'POST',
    params: {
      ...params,
      request: undefined,
      ...params['request'],
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/knowledge/document/share */
export async function knowledgeDocumentShare(
  body: API.KnowledgeDocumentShareRequest,
  options?: { [key: string]: any },
) {
  return request<API.ResultIdVO>('/api/v1/knowledge/document/share', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/v1/knowledge/document/share/content/${param0} */
export async function knowledgeDocumentShareContent(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.knowledgeDocumentShareContentParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ResultDocumentContentVO>(
    `/api/v1/knowledge/document/share/content/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 POST /api/v1/knowledge/global/search */
export async function knowledgeGlobalSearch(
  body: API.knowledgeGlobalSearchRequest,
  options?: { [key: string]: any },
) {
  return request<API.ResultListSearchHitDocumentVO>('/api/v1/knowledge/global/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/v1/knowledge/move/document/${param0} */
export async function knowledgeMoveDocument(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.knowledgeMoveDocumentParams,
  body: API.knowledgeMoveDocumentRequest,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/v1/knowledge/move/document/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/knowledge/page */
export async function knowledgePage(body: API.CommonPageRequest, options?: { [key: string]: any }) {
  return request<API.ResultPageVOKnowledgePageVO>('/api/v1/knowledge/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/knowledge/reconstruction/index */
export async function knowledgeReconstructionIndex(options?: { [key: string]: any }) {
  return request<any>('/api/v1/knowledge/reconstruction/index', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/knowledge/update/${param0} */
export async function knowledgeUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.knowledgeUpdateParams,
  body: API.KnowledgeCURequest,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/v1/knowledge/update/${param0}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/knowledge/update/document/${param0} */
export async function knowledgeUpdateDocument(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.knowledgeUpdateDocumentParams,
  body: API.KnowledgeCUDocumentRequest,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/v1/knowledge/update/document/${param0}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/knowledge/update/document/content/${param0} */
export async function knowledgeUpdateDocumentContent(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.knowledgeUpdateDocumentContentParams,
  body: API.KnowledgeUpdateDocumentContentRequest,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/v1/knowledge/update/document/content/${param0}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/knowledge/update/permissions/${param0} */
export async function knowledgeUpdatePermissions(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.knowledgeUpdatePermissionsParams,
  body: API.KnowledgeUpdatePermissionsRequest,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/v1/knowledge/update/permissions/${param0}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
