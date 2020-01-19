function policies(
  state: object[] = [{}],
  action: { type: string; payload: any; id?: string }
) {
  switch (action.type) {
    case "ADD_POLICY":
      return [...state, action.payload];
    case "DELETE_POLICY":
      return state.filter((policy: any) => policy.id !== action.payload.id);
    case "EDIT_POLICY":
      return state.map(
        (currentPolicy: any) =>
          [action.payload].find(
            updatedPolicy => updatedPolicy.id === currentPolicy.id
          ) || currentPolicy
      );
    default:
      return state;
  }
}

export default policies;
