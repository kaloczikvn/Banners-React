import packageJson from "../../package.json";

const LocalStorage = {
  get(item: string) {
    return localStorage.getItem(`${packageJson.name}-${item}`);
  },
  set(item: string, value: string | null) {
    if (value === null) {
      localStorage.removeItem(`${packageJson.name}-${item}`);
    } else {
      localStorage.setItem(`${packageJson.name}-${item}`, value);
    }
    return value;
  },
};

export default LocalStorage;
