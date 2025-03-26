import { useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Tailwind Font 테스트</h1>

        <div className="p-4 bg-white shadow-md rounded-lg">
          <div className="text-3xl font-bold mb-4">Pretendard 폰트 테스트</div>
          <p className="font-notosanskr text-lg mt-2">
            Noto Sans KR 폰트 테스트
          </p>

          <p className="font-pretendard font-thin text-lg mt-2">
            Pretendard - Thin (100)
          </p>
          <p className="font-pretendard font-light text-lg">
            Pretendard - Light (300)
          </p>
          <p className="font-pretendard font-normal text-lg">
            Pretendard - Regular (400)
          </p>
          <p className="font-pretendard font-medium text-lg">
            Pretendard - Medium (500)
          </p>
          <p className="font-pretendard font-bold text-lg">
            Pretendard - Bold (700)
          </p>
          <p className="font-pretendard font-black text-lg">
            Pretendard - Black (900)
          </p>
        </div>
      </div>
      <Accordion
        items={[
          {
            title: "첫번째 메뉴",
            content: "하위 메뉴입니다.",
          },
          {
            title: "두번째 메뉴",
            content: "하위 메뉴입니다.",
          },
          {
            title: "세번째 메뉴",
            content: "하위 메뉴입니다.",
          },
        ]}
      />
    </>
  );
}

export default App;
