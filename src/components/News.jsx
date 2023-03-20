import React, { useState } from "react";
import { Row, Col, Avatar, Card, Select, Typography } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";

const { Text, Title } = Typography
const { Option } = Select
const News = (simplified) => {
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count: simplified ? 10 : 100 })
    console.log(cryptoNews)
    return (
        <div>

        </div>
    )
}

export default News
