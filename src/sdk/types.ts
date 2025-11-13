export type AirobotSdkOptions = {
  // 聊天窗口宽度
  width?: number;
  // coordination
  coordination: string;
  // ai agent
  agent: string;
  // 用户id， 一般为 eamil
  userId?: string;
  // 传给 chat 的信息
  question?: string;
  // 比如：airobot-store
  endpointId: string;
  // agent 名称
  agentName: string;
  // 自定义 chat 地址
  aiChatUrl?: string;
}