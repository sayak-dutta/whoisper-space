"use client";
import { Image, Space, Typography } from 'antd'
import React from 'react'

export default function Header() {
    return (
        <div className="fixed-top text-center py-3">
            <Space className="bg-dark px-3 pt-2 rounded-5">
                <Image
                    height={50}
                    src={"./logo-alt.svg"}
                    alt="logo"
                    style={{ display: "flex", margin: "auto" }}
                    className="logoHeader my-auto p-0 m-0"
                />
            </Space>
        </div>
    )
}
