import React, { Component } from 'react'
import { Row, Col, Image, Tag, Collapse } from 'antd';
import { LikeOutlined, ReadOutlined } from "@ant-design/icons";

export default class Title extends Component {
  render() {
    return (
        <div className="block-rect">
            <Row>
                <Col span={6}>
                <Image
                    preview={{ visible: false }}
                    width={'100%'}
                    src="https://i.ibb.co/j4Jc955/Rectangle-31.png"
                />
                </Col>
                <Col span={18} className="flex">
                <div className="ml24">
                    <div>
                    <h1>Kasane</h1>
                    <p>By Kodansha</p>
                    <p>Drama • 10 Chapters</p>
                    <p><ReadOutlined /> 74,483 &nbsp;&nbsp;<LikeOutlined /> 15,789</p>
                    <div className="margin-horzital-24">
                        <Tag className="tag">18+</Tag>
                        <Tag className="tag">NEW</Tag>
                        <Tag className="tag">TRENDING</Tag>
                        <Tag className="tag">BESTSELLER</Tag>
                        <Tag className="tag">MANGA</Tag>
                    </div>
                    </div>
                </div>
                <div className="ml24">
                    <Tag className="tag-yellow">Read First Chapter for FREE</Tag>
                </div>
                </Col>
            </Row>
        </div>
    )
  }
}
