import { CrownFilled } from "@ant-design/icons"
import { Image } from "antd"
import React, { Component } from 'react'

export default class Related extends Component {
  render() {
    return (
        <div className="related-item ">
            <div className="flex ai-center">
                <Image
                  preview={{ visible: false }}
                  src="https://i.ibb.co/qsZ2HLW/image.png"
                ></Image>
                <div>
                    <h3>Title Name</h3>
                    <div className="">
                      <p className="purple-text fs14 flex ai-center"><CrownFilled style={{  color: '#A379FF' }}/>EXCLUSIVE</p>
                      <p className="fs14">PREQUEL</p>
                      <p className="fs14">45.6K reads</p>
                    </div>
                </div>
            
            </div>
        </div>
    )
  }
}
