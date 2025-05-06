declare namespace API {
  type BatchIdRequest = {
    /** ids */
    ids?: string[];
  };

  type ChatMessageVO = {
    id?: string;
    chatRoomId?: string;
    sender?: UserVO;
    sendTime?: string;
    type?: string;
    content?: string;
    isNotRead?: boolean;
  };

  type chatRomeDetailParams = {
    id: string;
  };

  type chatRoomAddUserParams = {
    id: string;
  };

  type ChatRoomCreateRequest = {
    name?: string;
    description?: string;
    userIds?: string[];
  };

  type chatRoomDeleteUserParams = {
    id: string;
  };

  type ChatRoomListRequest = {
    condition?: string;
  };

  type chatRoomUpdateParams = {
    id: string;
  };

  type ChatRoomUpdateRequest = {
    name?: string;
    description?: string;
  };

  type ChatRoomVO = {
    id?: string;
    name?: string;
    description?: string;
    userList?: UserVO[];
    messageList?: ChatMessageVO[];
    createUser?: UserVO;
  };

  type chatUserRoomParams = {
    targetUserId: string;
  };

  type CommonPageRequest = {
    /** 搜索条件 */
    searchCondition?: string;
    page?: PageRequest;
  };

  type departmentBatchUserAddParams = {
    id: string;
  };

  type departmentBatchUserRemoveParams = {
    id: string;
  };

  type DepartmentCURequest = {
    name?: string;
    parentId?: string;
  };

  type departmentUpdateParams = {
    id: string;
  };

  type DepartmentVO = {
    id?: string;
    name?: string;
    userList?: UserVO[];
  };

  type DocumentContentVO = {
    content?: string;
  };

  type DocumentExportHistoryPageVO = {
    id?: string;
    createUser?: UserVO;
    knowledge?: KnowledgePageVO;
    documents?: DocumentVO[];
    createTime?: string;
    finish?: DocumentVO[];
    status?: string;
    finishTime?: string;
  };

  type documentFindByIdParams = {
    id: string;
  };

  type DocumentVO = {
    id?: string;
    name?: string;
    parentId?: string;
    knowledgeId?: string;
    children?: DocumentVO[];
    createUserName?: string;
    createTime?: string;
    updateTime?: string;
  };

  type filePreviewParams = {
    id: string;
  };

  type FileUploadVO = {
    id?: string;
    path?: string;
  };

  type IdVO = {
    id?: string;
  };

  type knowledgeAddMemberParams = {
    id: string;
  };

  type KnowledgeAddMemberRequest = {
    members?: KnowledgeMemberRequest[];
    permissions?: string;
  };

  type KnowledgeBackgroundVO = {
    id?: string;
    name?: string;
    path?: string;
  };

  type knowledgeCreateDocumentParams = {
    id: string;
  };

  type KnowledgeCUDocumentRequest = {
    name?: string;
    parentId?: string;
  };

  type KnowledgeCURequest = {
    name?: string;
    coverFileId?: string;
    description?: string;
  };

  type knowledgeDeleteMemberParams = {
    id: string;
  };

  type KnowledgeDeleteMemberRequest = {
    members?: KnowledgeMemberRequest[];
  };

  type knowledgeDocumentContentParams = {
    id: string;
  };

  type knowledgeDocumentExportDownloadParams = {
    exportId: string;
  };

  type KnowledgeDocumentExportRequest = {
    knowledgeId?: string;
    ids?: string[];
  };

  type knowledgeDocumentIncludeParams = {
    request: KnowledgeDocumentIncludeRequest;
  };

  type KnowledgeDocumentIncludeRequest = {
    knowledgeId?: string;
    parentDocumentId?: string;
    file?: string;
  };

  type knowledgeDocumentShareContentParams = {
    id: string;
  };

  type KnowledgeDocumentShareRequest = {
    documentId?: string;
    unit?: string;
    quantity?: number;
    permissions?: string;
  };

  type knowledgeFindByIdParams = {
    id: string;
  };

  type knowledgeGlobalSearchRequest = {
    condition?: string;
  };

  type KnowledgeMemberRequest = {
    id?: string;
    type?: string;
  };

  type knowledgeMoveDocumentParams = {
    id: string;
  };

  type knowledgeMoveDocumentRequest = {
    targetDocumentId?: string;
  };

  type KnowledgePageVO = {
    id?: string;
    name?: string;
    cover?: KnowledgeBackgroundVO;
    isAdmin?: boolean;
    isWrite?: boolean;
    isRaed?: boolean;
    description?: string;
    permissions?: string;
  };

  type knowledgeUpdateDocumentContentParams = {
    id: string;
  };

  type KnowledgeUpdateDocumentContentRequest = {
    content?: string;
  };

  type knowledgeUpdateDocumentParams = {
    id: string;
  };

  type knowledgeUpdateParams = {
    id: string;
  };

  type knowledgeUpdatePermissionsParams = {
    id: string;
  };

  type KnowledgeUpdatePermissionsRequest = {
    permissions?: string;
  };

  type KnowledgeVO = {
    id?: string;
    name?: string;
    cover?: KnowledgeBackgroundVO;
    adminMembers?: MemberVO[];
    writeMembers?: MemberVO[];
    readMembers?: MemberVO[];
    documents?: DocumentVO[];
    isAdmin?: boolean;
    isWrite?: boolean;
    isRaed?: boolean;
    description?: string;
    permissions?: string;
  };

  type LoginRequest = {
    account?: string;
    password?: string;
  };

  type LoginVO = {
    user?: UserVO;
    token?: string;
  };

  type MemberListByNameLikeRequest = {
    name?: string;
  };

  type MemberVO = {
    id?: string;
    name?: string;
    type?: string;
  };

  type PageRequest = {
    /** 数量 */
    size?: number;
    /** 页码 */
    page?: number;
  };

  type PageVODepartmentVO = {
    /** 数据 */
    data?: DepartmentVO[];
    /** 页码 */
    page?: number;
    /** 数量 */
    size?: number;
    /** 总数 */
    total?: number;
    /** 总页 */
    pageTotal?: number;
  };

  type PageVODocumentExportHistoryPageVO = {
    /** 数据 */
    data?: DocumentExportHistoryPageVO[];
    /** 页码 */
    page?: number;
    /** 数量 */
    size?: number;
    /** 总数 */
    total?: number;
    /** 总页 */
    pageTotal?: number;
  };

  type PageVOKnowledgePageVO = {
    /** 数据 */
    data?: KnowledgePageVO[];
    /** 页码 */
    page?: number;
    /** 数量 */
    size?: number;
    /** 总数 */
    total?: number;
    /** 总页 */
    pageTotal?: number;
  };

  type PageVORecycleFileVO = {
    /** 数据 */
    data?: RecycleFileVO[];
    /** 页码 */
    page?: number;
    /** 数量 */
    size?: number;
    /** 总数 */
    total?: number;
    /** 总页 */
    pageTotal?: number;
  };

  type PageVOUserVO = {
    /** 数据 */
    data?: UserVO[];
    /** 页码 */
    page?: number;
    /** 数量 */
    size?: number;
    /** 总数 */
    total?: number;
    /** 总页 */
    pageTotal?: number;
  };

  type RecycleFileVO = {
    id?: string;
    name?: string;
    type?: string;
    deleteTime?: string;
    operate?: UserVO;
  };

  type ResultChatRoomVO = {
    /** 结果状态码 */
    code?: number;
    /** 响应信息 */
    message?: string;
    data?: ChatRoomVO;
    /** 接口请求时间 */
    timestamp?: number;
  };

  type ResultDocumentContentVO = {
    /** 结果状态码 */
    code?: number;
    /** 响应信息 */
    message?: string;
    data?: DocumentContentVO;
    /** 接口请求时间 */
    timestamp?: number;
  };

  type ResultDocumentVO = {
    /** 结果状态码 */
    code?: number;
    /** 响应信息 */
    message?: string;
    data?: DocumentVO;
    /** 接口请求时间 */
    timestamp?: number;
  };

  type ResultFileUploadVO = {
    /** 结果状态码 */
    code?: number;
    /** 响应信息 */
    message?: string;
    data?: FileUploadVO;
    /** 接口请求时间 */
    timestamp?: number;
  };

  type ResultIdVO = {
    /** 结果状态码 */
    code?: number;
    /** 响应信息 */
    message?: string;
    data?: IdVO;
    /** 接口请求时间 */
    timestamp?: number;
  };

  type ResultKnowledgeVO = {
    /** 结果状态码 */
    code?: number;
    /** 响应信息 */
    message?: string;
    data?: KnowledgeVO;
    /** 接口请求时间 */
    timestamp?: number;
  };

  type ResultListChatRoomVO = {
    /** 结果状态码 */
    code?: number;
    /** 响应信息 */
    message?: string;
    /** 数据 */
    data?: ChatRoomVO[];
    /** 接口请求时间 */
    timestamp?: number;
  };

  type ResultListKnowledgeBackgroundVO = {
    /** 结果状态码 */
    code?: number;
    /** 响应信息 */
    message?: string;
    /** 数据 */
    data?: KnowledgeBackgroundVO[];
    /** 接口请求时间 */
    timestamp?: number;
  };

  type ResultListMemberVO = {
    /** 结果状态码 */
    code?: number;
    /** 响应信息 */
    message?: string;
    /** 数据 */
    data?: MemberVO[];
    /** 接口请求时间 */
    timestamp?: number;
  };

  type ResultListSearchHitDocumentVO = {
    /** 结果状态码 */
    code?: number;
    /** 响应信息 */
    message?: string;
    /** 数据 */
    data?: SearchHitDocumentVO[];
    /** 接口请求时间 */
    timestamp?: number;
  };

  type ResultLoginVO = {
    /** 结果状态码 */
    code?: number;
    /** 响应信息 */
    message?: string;
    data?: LoginVO;
    /** 接口请求时间 */
    timestamp?: number;
  };

  type ResultPageVODepartmentVO = {
    /** 结果状态码 */
    code?: number;
    /** 响应信息 */
    message?: string;
    data?: PageVODepartmentVO;
    /** 接口请求时间 */
    timestamp?: number;
  };

  type ResultPageVODocumentExportHistoryPageVO = {
    /** 结果状态码 */
    code?: number;
    /** 响应信息 */
    message?: string;
    data?: PageVODocumentExportHistoryPageVO;
    /** 接口请求时间 */
    timestamp?: number;
  };

  type ResultPageVOKnowledgePageVO = {
    /** 结果状态码 */
    code?: number;
    /** 响应信息 */
    message?: string;
    data?: PageVOKnowledgePageVO;
    /** 接口请求时间 */
    timestamp?: number;
  };

  type ResultPageVORecycleFileVO = {
    /** 结果状态码 */
    code?: number;
    /** 响应信息 */
    message?: string;
    data?: PageVORecycleFileVO;
    /** 接口请求时间 */
    timestamp?: number;
  };

  type ResultPageVOUserVO = {
    /** 结果状态码 */
    code?: number;
    /** 响应信息 */
    message?: string;
    data?: PageVOUserVO;
    /** 接口请求时间 */
    timestamp?: number;
  };

  type ResultUserVO = {
    /** 结果状态码 */
    code?: number;
    /** 响应信息 */
    message?: string;
    data?: UserVO;
    /** 接口请求时间 */
    timestamp?: number;
  };

  type RoleVO = {
    id?: string;
    name?: string;
  };

  type SearchHitDocumentVO = {
    document?: DocumentVO;
    highlight?: Record<string, any>;
  };

  type UserCreateRequest = {
    username?: string;
    password?: string;
    phone?: string;
    email?: string;
  };

  type userDisableParams = {
    id: string;
  };

  type userEnableParams = {
    id: string;
  };

  type userResetPasswordParams = {
    id: string;
  };

  type UserResetPasswordRequest = {
    password?: string;
  };

  type userUpdateByIdParams = {
    id: string;
  };

  type UserUpdatePasswordRequest = {
    password?: string;
    newPassword?: string;
  };

  type UserUpdateRequest = {
    username?: string;
    phone?: string;
    email?: string;
  };

  type UserVO = {
    id?: string;
    username?: string;
    phone?: string;
    email?: string;
    enable?: boolean;
    departmentName?: string;
    roles?: RoleVO[];
    supplement?: boolean;
  };
}
