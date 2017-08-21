import uuid from 'uuid';

// this might be bad paradigm, registry should also be an actor, as well.
// pid should be address, this could get messy.
export default function () {
  const registry = [];

  const getUniquePid = () => {
    const pid = uuid.uuidv4();
    const exists = registry.filter(id => id === pid);
    if (exists) {
      return getUniquePid();
    }
    registry.push(pid);
    return pid;
  };
}
