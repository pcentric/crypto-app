import React, { useState } from "react";
import { Row, Col, Avatar, Card, Select, Typography } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";

const { Text, Title } = Typography;
const { Option } = Select;
const News = (simplified) => {
  const { data, error, isLoading } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplified ? 10 : 100,
  });
  console.log(data);
  return <div>Hello</div>;
};

export default News;
