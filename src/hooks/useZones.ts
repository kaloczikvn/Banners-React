import useSWR from "swr";

const fetcher = (...args: any) => fetch(args).then((res) => res.json());

export const useZones = () => {
  const { data, error, isLoading } = useSWR<IZones>("https://p4it.kvn.hu/ads.json", fetcher);
  return {
    data,
    isLoading,
    error,
  };
};
