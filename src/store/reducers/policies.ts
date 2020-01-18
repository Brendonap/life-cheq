function addPolicy(policyList: any, policy: any) {
  policyList.push(policy);
  return policyList;
}

function policies(
  state: Array<object> = [{}],
  action: { type: string; payload: object }
) {
  console.log("there", state);
  console.log(action.payload);
  switch (action.type) {
    case "ADD_POLICY":
      return addPolicy(state, action.payload);
    default:
      return state;
  }
}

export default policies;
