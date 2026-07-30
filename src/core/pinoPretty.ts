import { LogDescriptor } from 'pino';
import pinoPretty from 'pino-pretty';

const messageFormat = (log: LogDescriptor, messageKey: string): string => {
  return `[${log.context}] ${log[messageKey]}`;
};

export const prettyStream = pinoPretty({
  ignore: 'context,hostname,userId',
  messageFormat,
});
