import { AirobotSdk } from './sdk';

const airobotSdk = new AirobotSdk({
  agent: 'agent-1760604851-0fda15f6',
  coordination: '2435144671132914168',
  endpointId: 'airobot-store',
  agentName: 'B2B Chat Agent',
  userId: '578091306@qq.com',
  question: 'email:578091306@qq.com,fullname:Jack Jiang,totalprice:4000'
});

airobotSdk.init();

setTimeout(() => {
  airobotSdk.openWindow();
})