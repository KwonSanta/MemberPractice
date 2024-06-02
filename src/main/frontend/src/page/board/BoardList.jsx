import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import axios from "axios";

export function BoardList() {
  useEffect(() => {
    axios.get(`/api/board/list`).then().catch().finally();
  }, []);

  return <Box>게시판 페이지</Box>;
}
