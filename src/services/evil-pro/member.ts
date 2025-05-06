// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /api/v1/knowledge/member/list */
export async function memberListByNameLike(
  body: API.MemberListByNameLikeRequest,
  options?: { [key: string]: any },
) {
  return request<API.ResultListMemberVO>('/api/v1/knowledge/member/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
