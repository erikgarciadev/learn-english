import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Custom404 =() =>  {
  const router = useRouter();
  useEffect(() => {
    router.replace("/");
  });
  return null;
}


export default Custom404