"use client";
import { Button, Form, Input, message } from 'antd'
import { signIn } from 'next-auth/react';
import React, { useCallback } from 'react'

interface signUpProps {
    email: string,
    password: string
}

function Signup() {
    const onFinish = useCallback(async (value: signUpProps) => {
        const { email, password } = value
        try {
            const response = await signIn("credentials", { redirect: false, email, password })
            console.log("🚀 ~ onFinish ~ response:", response)
        } catch (error: any) {
            message.error(error.message)
            console.log("🚀 ~ onFinish ~ error:", error)
        }
    }, [])
    return (
        <div>
            <h1>Signup</h1>
            <Form onFinish={onFinish}>
                <Form.Item
                    name="email"
                    required={true}
                    rules={[{
                        required: true,
                        message: "Please enter the Email Field!"
                    }]}>
                    <Input type='text' placeholder='enter the email' />
                </Form.Item>
                <Form.Item
                    name="password"
                    required={true}
                    rules={[{
                        required: true,
                        message: "Please enter the Passsword Field!"
                    }]}>
                    <Input.Password type='text' placeholder='enter the password' />
                </Form.Item>
                <Form.Item>
                    <Button htmlType='submit' type='primary' block>Submit </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Signup