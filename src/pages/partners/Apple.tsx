import { useEffect } from "react";

const Apple = () => {
  useEffect(() => {
    window.location.href = "/partners/apple/index.html";
  }, []);

  return null;
};

export default Apple;
