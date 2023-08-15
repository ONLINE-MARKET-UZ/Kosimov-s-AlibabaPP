import { Button, Space } from "antd";

const App = () => {
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-red-400">Alibaba shopping center</h1>
      <Space
        direction="vertical"
        style={{
          width: "100%",
        }}
      >
        <Button type="primary" block className="bg-blue-400">
          Primary
        </Button>
        <Button block>Default</Button>
        <Button type="dashed" block>
          Dashed
        </Button>
        <Button disabled block>
          disabled
        </Button>
        <Button type="text" block>
          text
        </Button>
        <Button type="link" block>
          Link
        </Button>
      </Space>
    </div>
  );
};

export default App;
