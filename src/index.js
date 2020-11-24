export default function orderByProps(obj, prioritizedProps) {
  const allProps = Object.keys(obj);

  const nonPrioritizedProps = [];
  for (const prop of allProps) {
    if (!prioritizedProps.includes(prop)) {
      nonPrioritizedProps.push(prop);
    }
  }

  const sortedNonPrioritizedProps = nonPrioritizedProps.sort();

  const orderedFields = [];

  for (const prop of prioritizedProps) {
    orderedFields.push({ key: prop, value: obj[prop] });
  }

  for (const prop of sortedNonPrioritizedProps) {
    orderedFields.push({ key: prop, value: obj[prop] });
  }

  return orderedFields;
}
