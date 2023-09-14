"use client";

import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

export default function DetailLink() {
  let router = useRouter();
  let a = usePathname();
  let b = useSearchParams();
  let c = useParams();
  return (
    <button
      onClick={() => {
        // router.push("/");
        router.refresh();
      }}
    >
      refresh
    </button>
  );
}
