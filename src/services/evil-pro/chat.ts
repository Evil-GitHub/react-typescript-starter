// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /api/v1/knowledge/chat/room/${param0} */
export async function chatRomeDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.chatRomeDetailParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ResultChatRoomVO>(`/api/v1/knowledge/chat/room/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/knowledge/chat/room/add-user/${param0} */
export async function chatRoomAddUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.chatRoomAddUserParams,
  body: API.BatchIdRequest,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/v1/knowledge/chat/room/add-user/${param0}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/knowledge/chat/room/batch/delete */
export async function chatRoomDelete(body: API.BatchIdRequest, options?: { [key: string]: any }) {
  return request<any>('/api/v1/knowledge/chat/room/batch/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/knowledge/chat/room/create */
export async function chatRoomCreate(
  body: API.ChatRoomCreateRequest,
  options?: { [key: string]: any },
) {
  return request<API.ResultIdVO>('/api/v1/knowledge/chat/room/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/knowledge/chat/room/delete-user/${param0} */
export async function chatRoomDeleteUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.chatRoomDeleteUserParams,
  body: API.BatchIdRequest,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/v1/knowledge/chat/room/delete-user/${param0}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/knowledge/chat/room/list */
export async function chatRoomList(
  body: API.ChatRoomListRequest,
  options?: { [key: string]: any },
) {
  return request<API.ResultListChatRoomVO>('/api/v1/knowledge/chat/room/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/v1/knowledge/chat/room/update/${param0} */
export async function chatRoomUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.chatRoomUpdateParams,
  body: API.ChatRoomUpdateRequest,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/v1/knowledge/chat/room/update/${param0}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/v1/knowledge/chat/room/user/${param0} */
export async function chatUserRoom(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.chatUserRoomParams,
  options?: { [key: string]: any },
) {
  const { targetUserId: param0, ...queryParams } = params;
  return request<API.ResultChatRoomVO>(`/api/v1/knowledge/chat/room/user/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
