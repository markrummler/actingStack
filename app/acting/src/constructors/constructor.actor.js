import setImmediate from 'setimmediate';
import globalRegistry from '../workers/registry.global';


export default function () {
  const send = (recipient, message, callback) => {
    setImmediate(() => {
      const returnValue = recipient.behavior(message);
      callback(returnValue);
    });
  };

  // this should probably be process address, instead of pid, though it will be slightly interchangeable
  const pid = () => {
    return globalRegistry.getUniquePid;
  };

  // TODO: convert to persistent process instead of object
  const actor = {
    send,
    id: pid(),
  };

  return actor;
}

