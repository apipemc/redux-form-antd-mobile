import { customMap } from "./mapError";

export default customMap((mapProps, { input: { onChange } }) => ({
  ...mapProps,
  onChange: text => onChange(text)
}));
