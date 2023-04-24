import { SET_{{  strtoupper($alias)  }} } from "./constants";

export const set{{ ucfirst($alias) }}Action = (payload) => ({
type: SET_{{  strtoupper($alias)  }},
payload,
});
