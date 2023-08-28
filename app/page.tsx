'use client'
// Nextjs 13 부터는 app directory 기반 라우팅 진행 - 이번 버전부터 베타로 진행하는 만큼

import Chart from "@/components/Chart";
import styled from "styled-components";

const H = styled.div`
  color:red;
  background-color: black;
`

// 어렵거나 아니다싶으면 언제든 Next12로 돌아갈 수 있어야(다행히도 하위호환 지원)
const Home=()=> {
  return (
    <main>
      <H>
    Next app
      </H>
      <p>
      {process.env.NEXT_PUBLIC_MY_NAME}
      </p>
    <Chart/>
    </main>
  )
}

export default Home;
