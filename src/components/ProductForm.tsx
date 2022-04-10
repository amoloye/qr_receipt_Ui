import React, { useState } from "react";
import { Input, Typography, Select, Button } from "antd";
import styled from "styled-components";
import { Spacer } from "./Spacer";

const Form = () => (
  <Card>
    <div>
      <Input placeholder="product name" />
    </div>
    <Spacer />
    <div>
      <Input placeholder="quantity" />
    </div>
    <Spacer />
    <div>
      <Input placeholder="price" />
    </div>
  </Card>
);

export const ProductForm = () => {
  const { Option } = Select;
  const [formNumber, setFormNumber] = useState(0);
  return (
    <Wrapper>
      <Typography.Title level={4}>
        How many products do you want to add?
      </Typography.Title>
      <Spacer size="s" />
      <Select
        defaultValue="0"
        style={{ width: 120 }}
        onChange={(value) => setFormNumber(parseInt(value, 10))}
      >
        {Array.from(Array(11).keys()).map((key) => (
          <Option value={key}>{key}</Option>
        ))}
      </Select>
      <Spacer />
      <FormWrapper>
        {Array.from(Array(formNumber).keys()).map(() => (
          <Form />
        ))}
      </FormWrapper>
      <Spacer />
      {formNumber > 0 && (
        <>
          <Button>Add {formNumber > 1 ? "products" : "product"}</Button>
          <Spacer />
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justtify-content: center;
  align-items: center;
`;

const FormWrapper = styled.div`
  display: grid;
  min-width: 900px;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const Card = styled.div`
  margin: auto 0;
  max-width: 300px;
  min-height: 200px;
  border: 1px solid #d3d3d3;
  border-radius: 20px;
  padding: 30px 20px;
`;
